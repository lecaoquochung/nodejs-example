// native modules
var http = require('http');
var fs = require('fs');
var path = require('path');

// assets module
var files = { };
var port = 9000;
var host = '127.0.0.1';

var assets = function(req, res) {

  // send error
  // code default value 404 - Not Found
  // Option: change error code (4XX: client error, 5XX: Server error ...)
  var sendError = function(message, code) {
    if(code === undefined) {
      code = 404;
    }
    res.writeHead(code, {'Content-Type': 'text/html'});
    res.end(message);
  }

  // regconize file & extension
  var serve = function(file) {
    var contentType;
    switch(file.ext.toLowerCase()) {
      case "css": contentType = "text/css"; break;
      case "html": contentType = "text/html"; break;
      case "js": contentType = "application/javascript"; break;
      case "ico": contentType = "image/ico"; break;
      case "json": contentType = "application/json"; break;
      case "jpg": contentType = "image/jpeg"; break;
      case "jpeg": contentType = "image/jpeg"; break;
      case "png": contentType = "image/png"; break;
      default: contentType = "text/plain";
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.end(file.content);
  }

  // read file
  var readFile = function(filePath) {
    if(files[filePath]) {
      serve(files[filePath]);
    } else {
      fs.readFile(filePath, function(err, data) {
        if(err) {
          sendError('Error reading ' + filePath + '.');
          return;
        }
        files[filePath] = {
          ext: filePath.split(".").pop(),
          content: data
        };
        serve(files[filePath]);
      });
    }
  }

  readFile(path.normalize(__dirname + req.url));
}

var app = http.createServer(assets).listen(port, host);
console.log('Listening on ' + host + ":" + port);
