var express = require('express');
var cors = require('cors');

var app1 = express();
var app2 = express();

app1.listen(3000);
app2.listen(3001);

app2.use(cors({
  origin: 'http://0.0.0.0:3000'
}));

//app2.use('/', function(req, res, next) {
//  if
//});

app1.use(express.static(__dirname + '/app1'));
app2.use(express.static(__dirname + '/app2'));

app2.get('/login', function(req, res) {
  res.cookie('sid', '1', {expires: new Date(Date.now() + 900000)}).json('ok');
});
