var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/tanto', function(req, res){
	var tanto = [
		{
			first_name: "A",
			last_name: "Taro",
			age: 34,
			gender: "male"
		},
		{
			first_name: "B",
			last_name: "Shibuya",
			age: 27,
			gender: "male"
		},
		{
			first_name: "C",
			last_name: "Tokyo",
			age: 30,
			gender: "female"
		}
	];

	res.json(tanto);
});

app.get('/download', function(req, res){
	res.download(path.join(__dirname, '/downloads/pdf-sample.pdf'));
});

app.get('/about', function(req, res){
	res.redirect('/about.html');
});

app.post('/subscribe', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	console.log(name+' has subscribed with '+email);
});

app.listen(3000, function(){
	console.log('Server started on port 3000');
});
