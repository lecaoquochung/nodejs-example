var config      = require('./knexfile.js');  
var env         = 'development';
var knex        = require('knex')(config[env]);

knex.select("*").from("users").asCallback(function(err, values) {
  if(err) {
    console.log(err);
  } else {
    console.log(values);
  }
  knex.destroy();
});