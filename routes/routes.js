'use strict';

const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    content : 'If you can read this, then the Express Server is working as intended.'
  });
});

module.exports = routes;
