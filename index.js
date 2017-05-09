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
