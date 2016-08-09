// event build-in
var events = require('events');
var eventEmitter = new.events.eventEmitter();
var somethingHappen = function() {
  console.log('Something happen!');
}

eventEmitter
.on('something-happen', somethingHappen)
.emit('something-happen');
