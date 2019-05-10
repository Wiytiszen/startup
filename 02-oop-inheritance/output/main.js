"use strict";

var _movieClass = _interopRequireDefault(require("./movieClass.js"));

var _loggerClass = _interopRequireDefault(require("./loggerClass.js"));

var _actorClass = _interopRequireDefault(require("./actorClass.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// instances of Movie Class
var movie1 = new _movieClass["default"]("Scent of a woman", 1992, 156); // adding cast

var actor1 = new _actorClass["default"]("Al Pacino", 79);
var actor2 = new _actorClass["default"]("Chris O'Donnell", 48);
var otherActors = [new _actorClass["default"]("Gabriella Anwar", 49), new _actorClass["default"]("James Rebhorn", 66), new _actorClass["default"]("Philip Seymour Hoffman", 47)]; // Calling addCast

movie1.addCast(actor1, actor2, otherActors);
console.log(movie1.cast); // Using the logger 

var logger = new _loggerClass["default"]();
movie1.on("playing", function () {
  return logger.log("play");
});
movie1.play(); // Mixin

var mixin = {
  share: function share(name) {
    console.log("".concat(name, " share ").concat(this.title));
  },
  like: function like(name) {
    console.log("".concat(name, " likes ").concat(this.title));
  }
};
Object.assign(movie1, mixin);
movie1.share("Martin Wiytiszen");
movie1.like("Debora Pardo");