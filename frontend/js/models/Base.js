var ajax = require('../lib/Ajax');

module.exports = Ractive.extend({
  data: {
    value: null,
    url: ''
  },

  // Ajax wrapper (similar to jQuery's ajax method)
  fetch: function() {
    var self = this;
    ajax.request({
      url: self.get('url'),
      json: true
    })
    .done(function(result) {
      self.set('value', result);
    })
    .fail(function(xhr) {
      self.fire('Error fetching ' + self.get('url'))
    });
    return this;
  },

  // bindComponent: observe local data property value for changes
  bindComponent: function(component) {
    if(component) {
      this.observe('value', function(v) {
        for(var key in v) {
          component.set(key, v[key]);
        }
      }, { init: false });
    }
    return this;
  }

});

// create function
create: function(callback) {
  var self = this;
  ajax.request({
    url: self.get('url'),
    method: 'POST',
    data: this.get('value'),
    json: true
  })
  .done(function(result) {
    if(callback) {
      callback(null, result);
    }
  })
  .fail(function(xhr) {
    if(callback) {
      callback(JSON.parse(xhr.responseText));
    }
  });
  return this;
}

// update function
update: function(callback) {
  var self = this;
  ajax.request({
    url: self.get('url'),
    method: 'PUT',
    data: this.get('value'),
    json: true
  })
  .done(function(result) { // ... })
  .fail(function(xhr) { // ... });
  return this;
},

// delete function
delete: function(callback) {
 var self = this;
 ajax.request({
   url: self.get('url'),
   method: 'DELETE',
   json: true
 })
 .done(function(result) { ... })
 .fail(function(xhr) { ... });
 return this;
}

// setter
setter: function(key) {
  var self = this;
  return function(v) {
    self.set(key, v);
  }
}
