var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var db = require('db/config.js');

var dbName = 'banal-conga-line';
var portNum = 8000;

// Start Express server
var app = express();

// Add middleware
require('./middleware.js')(app, express); //TODO: make sure path to middleware is correct

// Request handlers
app.use(express.static('./client'));
app.get('./api');



// Set app to listen
app.listen(portNum);

// Export app
module.exports = app;