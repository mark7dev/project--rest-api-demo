var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hell Yeah!');
});

app.listen(3000, function () {
  console.log('Go check port 3000!');
});