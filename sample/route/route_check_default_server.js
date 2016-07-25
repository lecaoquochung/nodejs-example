// /home: This matches http://localhost/home
// /user/feed: This matches http://localhost/user/feed
// /user/:id/profile: This matches http://localhost/user/45/profile
// /user/:id/:action: This matches http://localhost/user/45/update

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
