// frontend/js/lib/Router.js
module.exports = function() {
  return {
    routes: [],
    add: function(path, handler) {
      // ...
      if(typeof path === 'function') {
        handler = path;
        path = '';
      }
      this.routes.push({
        path: path,
        handler: handler
      });
      return this;
    },

    // f: fracment -> url path
    check: function(f, params) {
      var fragment, vars;

      if(typeof f !== 'undefined') {
        fragment = f.replace(/^\//, '');
      } else {
        fragment = this.getFragment();
      }

      for(var i=0; i<this.routes.length; i++) {
        var match, path = this.routes[i].path;
        path = path.replace(/^\//, '');
        vars = path.match(/:[^\s/]+/g);
        var r = new RegExp('^' + path.replace(/:[^\s/]+/g,'([\\w-]+)'));
        match = fragment.match(r);

        if(match) {
          match.shift();
          var matchObj = {};
          if(vars) {
            for(var j=0; j<vars.length; j++) {
              var v = vars[j];
              matchObj[v.substr(1, v.length)] = match[j];
            }
          }
          this.routes[i].handler.apply({},
          (params || []).concat([matchObj]));
          return this;
        }
      }
      return false;
    }
  }
};
