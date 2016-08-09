var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Hello World');
});

app.get('/about', function(req, res){
	res.send('<h1>About Us</h1>');
});

app.listen(3000, function(){
	console.log('Server started on port 3000');
});
