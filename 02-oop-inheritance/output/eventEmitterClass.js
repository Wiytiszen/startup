"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/********** EventEmitter ****/
var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callBacks) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }

      this.listeners[eventName].push(callBacks);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      if (this.listeners[eventName]) {
        this.listeners[eventName].forEach(function (fn) {
          fn.apply();
        });
      }
    }
  }, {
    key: "off",
    value: function off(eventName, callBacks) {
      var lis = this.listeners[eventName];

      if (!lis) {
        return this;
      }

      for (var i = lis.length; i > 0; i--) {
        if (lis[i] === callBacks) {
          lis.splice(i, 1);
          break;
        }
      }
    }
  }]);

  return EventEmitter;
}();

exports["default"] = EventEmitter;