// build-in module
var http = require('http');

// module
// var file = require('./file.js');
var Assets = require('./backend/Assets');

// router
Router
.add('static', Assets)
.add('api', API)
.add(Default);
var session = require('cookie-session');
var checkSession = function(req, res) {
  session({
    keys: ['nodejs-example']
  })(req, res, function() {
    process(req, res);
  });
}

var process = function(req, res) {
 Router.check(req.url, [req, res]);
}

var app = http.createServer(checkSession).listen(port,'127.0.0.1');
console.log("Listening on 127.0.0.1:" + port);
