var express = require('express');
var fs = require('fs');
var os = require('os');
var app = express();
var port = 5001;

app.get('/', function (req, res) {
  res.send('<h1>Hello GDG STBG!</h1>');
});

app.get('/ip', function (req, res) {
  var interfaces = os.networkInterfaces();
  var addresses = [];
  for (var k in interfaces) {
      for (var k2 in interfaces[k]) {
          var address = interfaces[k][k2];
          if (address.family === 'IPv4' && !address.internal) {
              addresses.push(address.address);
          }
      }
  }
  res.send('<h1>' + addresses.toString() + '</h1>');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
