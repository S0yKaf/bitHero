// bitHero - Your very own Twitch adventure
// Copyright (C) 2017  Victor Dyotte - Kiniamaro (vdyotte@gmail.com)
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along
// with this program; if not, write to the Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

'use strict';

// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const models = require('./database/models');
const passport = require('passport');
const TwitchStrategy = require('passport-twitch').Strategy;

const User = require('./database/models').User;

const config = require('./config.json');

const routes = require('./routes/routes');

// MiddleWares
app.use(bodyParser.json());
app.use(session({
  secret: 'all your base are belong to us.',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new TwitchStrategy({
    clientID: config.twitch.clientID,
    clientSecret: config.twitch.clientSecret,
    callbackURL: 'http://bithero.xyz/api/auth/twitch/callback',
    scope: ['user_read', 'channel_check_subscription']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({
      where: {
        twitch_id: profile.id
      }
    }).spread((user, created) => {
        user.update({
          access_token: accessToken,
          refresh_token: refreshToken,
          username: profile.username,
          display_name: profile.display_name || profile.username,
          email: profile.email,
          logo: profile._json.logo
        });
        return done(null, user);
    });
  })
);

const PORT = 4201;

models.sequelize.sync().then(() => {
  // Server start
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Express server listening on port ${PORT}`);
    }
  });
});


module.exports = app;
