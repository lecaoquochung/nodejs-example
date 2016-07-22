var assert = require('assert'); // native nodejs module. Another one libs Chai or Expect.js work well with mocha

describe('Testing JSON reader', function() { // dscribe mocha-specific functions
  it('should get json', function(done) { // it mocha-specific functio
    var reader = require('./JSONReader');
    assert.equal(typeof reader, 'object');
    assert.equal(typeof reader.read, 'function');
    done();
  });
});
