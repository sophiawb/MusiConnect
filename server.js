var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var db = require('./db/dbparser');
var morgan      = require('morgan');
var bodyParser  = require('body-parser');

var dbName = 'banal-conga-line';
var portNum = 8000;

// Start Express server
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// Request handlers
app.use(express.static(__dirname + '/client'));

app.get('/api/user/:UID', function(req, res){
  // receive uid
  // return user object
  var UID = req.params.UID;
  // console.log(req.params.UID);
  db.getUID(UID, function(userData){
    // console.log("26", userData);
    res.end(userData);
  })
});

app.post('/api/user', function(req, res) {
  // receive user object
  // add it to database
  // respond with 304 - TODO: redirect here or client-side? 
  var userObj = req.data;
  console.log("============================>", req.body);
  db.addUser(userObj);
});

app.get('/api/request', function(req, res){
  // right now get all requests TODO filter requests
  // return object of requests
  db.getRequests(function(requests){
    // console.log(requests);
    res.end(JSON.stringify(requests));
  })
});

app.post('/api/request', function(req, res){
  // receive req obj
  // return post it
  // return 304
  var reqObj = req.data;
  db.addrequest(reqObj);
});



// Set app to listen
app.listen(portNum);

// Export app
module.exports = app;