var express = require('express');
var app = express();

//--public
//  --css
//  --js
//  --view
/*app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});*/

app.use('/', express.static(__dirname + '/public'));

/*app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
 });*/

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});