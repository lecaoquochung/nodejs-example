var util = require("util"); // build-in utility module
var events = require("events");
var Class = function() { };

util.inherits(Class, events.EventEmitter);
Class.prototype.ratePoints = 0;
Class.prototype.rate = function(points) {
  ratePoints = points;
  this.emit('rated');
};
Class.prototype.getPoints = function() {
  return ratePoints;
}
module.exports = Class;
