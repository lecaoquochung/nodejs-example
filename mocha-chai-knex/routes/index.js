var express = require('express');
var router = express.Router();

var queries = require('../db/queries');


// *** GET all shows *** //
router.get('/shows', function(req, res, next) {
  queries.getAll()
  .then(function(shows) {
    res.status(200).json(shows);
  })
  .catch(function(error) {
    next(error);
  });
});


module.exports = router;