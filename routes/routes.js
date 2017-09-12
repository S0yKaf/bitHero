'use strict';

const routes = require('express').Router();
const passport = require('passport');
const PubSubClient = require('../api/twitch/PubSubClient');

let clients = [];

routes.get('/', (req, res) => {
  res.status(200).json({
    content: 'If you can read this, then the Express Server is working as intended.'
  });
});

routes.get('/user', ensureAuthenticated, (req, res) => {
  res.status(200).json({
    session: req.session.passport.user
  });
});

routes.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

routes.get('/connect', ensureAuthenticated, (req, res) => {
  var client = new PubSubClient(0);
  client.addUser(req.session.passport.user.twitch_id, req.session.passport.user.access_token);
  clients.push(client);
});

routes.get('/auth/twitch', passport.authenticate('twitch', {forceVerify: true}));
routes.get('/auth/twitch/callback', passport.authenticate('twitch', {failureRedirect: '/api/auth/twitch'}), (req, res) => {
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/api/auth/twitch');
}

module.exports = routes;
