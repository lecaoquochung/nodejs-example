var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  var content = '';
  var type = '';

  if(req.url === '/') {
    content = fs.readFileSync('./page.html');
    type = 'text/html';
  } else if(req.url === '/styles.css') {
    content = fs.readFileSync('./assets/style.css');
    type = 'text/css';
  } else if(req.url === '/api/user/new') {
    // Do action
    // POST parameter
    // save to db
    content = '{"success": true}';
    type = 'application/json';
  }

  res.writeHead(200, {'Content-Type': type});
  res.end(content + '\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');
