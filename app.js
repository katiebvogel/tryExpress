//notes on first day of express.js
//require 'express' looks in the node_modules folder for the 'express library'

//this app.js file is actually code for a SERVER side
//I should have named it server.js

//If I create a client.js file, that would give code that would be seen on the
//client side (on the web browser)

var express = require('express');
var app = express();
var port = 3000;

var path = require('path');

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', function(request, response){
  response.send('Hi There!');
});

app.get('/cat', function(request, response){
  response.send('Meow');
});

app.listen(port, function(){
  console.log('Started express server on port', port);
  console.log('Press Ctrl-C to stop');
});


app.post('/', function(request, response){
  response.sendStatus(200);
});
