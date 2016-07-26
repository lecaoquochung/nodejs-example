var express = require('express');
var path = require('path');

var app = express();

// set static path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
  console.log('Server is running at: http://127.0.0.1:3000');
  console.log(path.join(__dirname, 'public'));
  console.log(path);
});
