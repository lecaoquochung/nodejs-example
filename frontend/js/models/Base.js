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
