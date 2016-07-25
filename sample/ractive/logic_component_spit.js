// Ractive.js basic
// 01 Component
var Component = Ractive.extend({
  template: '<div><h1>{{title}}</h1></div>',
  data: {
    title: 'Hello world'
  }
});
var instance = new Component();
instance.render(document.body);

// 02 sub Component
var SubComponent = Ractive.extend({
  template: '<small>Hello there!</small>'
});
var Component = Ractive.extend({
  template: '\
  <div>\
  <h1>{{title}}</h1>\
  <my-subcomponent />\
  </div>\
  ',
  data: {
    title: 'Hello world'
  },
  components: {
    'my-subcomponent': SubComponent
  }
});
var instance = new Component();
instance.render(document.querySelector('body'));

// 03 comunication between different Ractive.js
var Component = Ractive.extend({
  template: '<div><h1>{{title}}</h1></div>',
  notifyTheOutsideWorld: function() {
    this.fire('custom-event');
  }
});
var instance = new Component();
instance.on('custom-event', function() {
  this.set('title', 'Hey!');
  instance.render(document.querySelector('body'));
});
instance.notifyTheOutsideWorld();

// 04 observing the changes in the component's data properties.
// title properties example
var Component = Ractive.extend({
  template: '<div><h1>{{title}}</h1></div>'
});
var instance = new Component();
instance.observe('title', function(value) {
  alert(value);
});
instance.set('title', 'Hello!')
