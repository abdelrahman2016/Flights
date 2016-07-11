var express = require('express');
var app = express();

app.use(express.static('./static'));
/*app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/home.html');
});*/

app.listen(8080, function () {
  console.log('http://localhost:8080');
});
	