// dbname: nodejs-example
// status: not work
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/nodejs-example',
function(err, db) {
 // ...
});

// db object with CRUD
  // var collection = db.collection('users');
  // collection.insert({
  //   name: 'Hung',
  //   email: 'lehung@test.com'
  // }, function(err, result) {
  //   // ...
  // });
