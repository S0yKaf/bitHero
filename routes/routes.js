'use strict';

const routes = require('express').Router();
const passport = require('passport');

routes.get('/', (req, res) => {
  res.status(200).json({
    content: 'If you can read this, then the Express Server is working as intended.'
  });
});


routes.get('/auth/twitch', passport.authenticate('twitch'));
routes.get('/auth/twitch/callback', passport.authenticate('twitch', {failureRedirect: '/'}), (req, res) => {
  res.cookie('token', req.session.passport.user, {
    expires: new Date(Date.now() + (7776000 * 1000)) // 3 months from now
  });
  res.redirect('/');
});



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = routes;
