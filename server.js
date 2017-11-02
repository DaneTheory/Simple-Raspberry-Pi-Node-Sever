var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome To The Valhalla Web Server');
});

var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Valhalla web server running on port', port);

});
