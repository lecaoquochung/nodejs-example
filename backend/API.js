// mongodb
var MongoClient = require('mongodb').MongoClient;
var database;

// mongodb helper: getDatabaseConnection -> connect to mongodb
// connect the first time (save to cache as object for the nex call)
var getDatabaseConnection = function(callback) {
  if(database) {
    callback(database);
    return;
  } else {
    MongoClient.connect('mongodb://127.0.0.1:27017/nodejs-example',
    function(err, db) {
      if(err) {
        throw err;
      };
      database = db;
      callback(database);
    });
  }
};

// POST request handling
var querystring = require('querystring');
var processPOSTRequest = function(req, callback) {
  var body = '';
  req.on('data', function (data) {
    body += data;
  });
  req.on('end', function () {
    callback(querystring.parse(body));
  });
};

// email validation
var validEmail = function(value) {
 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(value);
};

// router api/user with add method
Router.add('api/user', function(req, res) {
  switch(req.method) {
    case 'GET':
    // ...
    break;
    case 'PUT':
    // ...
    break;
    case 'POST':
    processPOSTRequest(req, function(data) {
      if(!data.firstName || data.firstName === '') {
        error('Please fill your first name.', res);
      } else if(!data.lastName || data.lastName === '') {
        error('Please fill your last name.', res);
      } else if(!data.email || data.email === '' ||
        !validEmail(data.email)) {
          error('Invalid or missing email.', res);
      } else if(!data.password || data.password === '') {
        error('Please fill your password.', res);
      } else {
        getDatabaseConnection(function(db) {
          var collection = db.collection('users');
          data.password = sha1(data.password);
          collection.insert(data, function(err, docs) {
            response({
              success: 'OK'
            }, res);
          });
        });
      }
    });
    break;
    case 'DELETE':
    // ...
    break;
  };
});
