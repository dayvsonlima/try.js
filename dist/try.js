'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

window.Object.prototype.try = function objectTry(methodName) {
  var context = this[methodName];
  var type = typeof context === 'undefined' ? 'undefined' : _typeof(context);

  if (type === 'function') {
    for (var _len = arguments.length, parameters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      parameters[_key - 1] = arguments[_key];
    }

    return this[methodName].apply(this, parameters) || false;
  }

  if (type === 'undefined') {
    return false;
  }

  return context;
};