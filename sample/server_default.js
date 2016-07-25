// build-in module
var http = require('http');

// module
// var file = require('./file.js');

// process

http.createServer(function (req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n')
}).listen(9000,'127.0.0.1');
console.log('Server is running at http://127.0.0.1:9000');

// event with book.js example
var BookClass = require('./book.js');
var book = new BookClass();
book.on('rated', function() {
  console.log('Rated with ' + book.getPoints());
})
book.rate(10);

console.log('///////////');
