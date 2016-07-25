// routes' registration
// check url match specifically url
listen: function() {
  var self = this;
  var current = self.getFragment();
  var fn = function() {
    if(current !== self.getFragment()) {
    current = self.getFragment();
    self.check(current);
    }
  }

  clearInterval(this.interval);
  this.interval = setInterval(fn, 50);

  return this;
}

navigate: function(path) {
 path = path ? path : '';
 history.pushState(null, null, this.root + this.clearSlashes(path));
 return this;
}
