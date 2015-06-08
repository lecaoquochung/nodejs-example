// var http = require('http');
// http.createServer(function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.end('Hello World!\n');
// }).listen(1337);
// console.log('Server running at Port 1337');


// use with node static
var http = require('http');
var static = require('node-static');
var file = new static.Server();
http.createServer(function (req, res) {
file.serve(req, res);
}).listen(1337);
console.log('Server running at Port 1337');
