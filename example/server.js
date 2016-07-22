var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n')
}).listen(9000,'127.0.0.1');
console.log('Server is running at http://127.0.0.1:9000');

// write file
fs.writeFile('data.txt', 'Hello world!', function (err){
  if(err) {throw err;}
  console.log('It is saved!');
});

// read file
fs.readFile('data.txt', function(err, data){
  if(err) throw err;
  console.log(data.toString());
});
