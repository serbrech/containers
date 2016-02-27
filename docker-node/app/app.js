var express = require('express');
var fs = require('fs');
var app = express();
var port = 5001;

app.get('/', function (req, res) {
  res.send('<h1>Hello GDG STBG!</h1>');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
