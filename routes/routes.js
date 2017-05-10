'use strict';

const routes = require('express').Router();

const twitchOauth = require('../api/twitchOauth').handler;

routes.get('/', (req, res) => {
  res.status(200).json({
    content: 'If you can read this, then the Express Server is working as intended.'
  });
});

routes.get('/twitch-oauth', (req, res) => {
  return twitchOauth(req, res);
});

module.exports = routes;
