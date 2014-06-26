var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
console.log('Listening on port: '+port);
app.use(express.static(__dirname + '/www'));
app.listen(port);