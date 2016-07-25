// backend/API.js
module.exports = function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{}' + '\n');
}
