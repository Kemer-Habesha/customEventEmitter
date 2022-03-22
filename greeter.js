// Event Emitter
const EventEmitter = require("events");

// Util
const util = require("util");

// Greeter
const Greeter = function (name) {
  this.name = name;
};

// util.inherits(Greeter, EventEmitter);
Greeter.prototype = Object.create(EventEmitter.prototype);

Greeter.prototype.sayHi = function () {
  this.emit("hey", this.name);
};

module.exports = Greeter;
