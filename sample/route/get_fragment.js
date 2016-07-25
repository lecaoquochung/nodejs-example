// Helper method: Check fragment is defined
// Get the current url of the browser (window.location object)
getFragment: function() {
  var fragment = '';

  fragment = this.clearSlashes(decodeURI(window.location.pathname+ location.search));
  fragment = fragment.replace(/\?(.*)$/, '');
  fragment = this.root !== '/' ? fragment.replace(this.root, '') :
  fragment;

  return this.clearSlashes(fragment);
}

// clear slashes: remove slashes from the beginning & end of the string
clearSlashes: function(path) {
  return path.toString().replace(/\/$/, '').replace(/^\//, '');
}
