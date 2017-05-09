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
const models = require('./models');
// MiddleWares
app.use(bodyParser.json());

// Routes
const routes = require('./routes/routes');

//  Connect all our routes to our application
app.use('/', routes);

const PORT = 4200;

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
