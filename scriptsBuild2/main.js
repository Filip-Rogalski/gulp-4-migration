(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var add = function add(a, b) {
    return a + b;
};

exports.default = add;
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var multiply = function multiply(a, b) {
    console.log('multiply');
    return a * b;
};

exports.default = multiply;
},{}],3:[function(require,module,exports){
'use strict';

var _add = require('./components/add.js');

var _add2 = _interopRequireDefault(_add);

var _multiply = require('./components/multiply.js');

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 4;
var b = 5;
console.log((0, _add2.default)(a, b));
console.log((0, _multiply2.default)(a, b));
},{"./components/add.js":1,"./components/multiply.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzQnVpbGQvY29tcG9uZW50cy9hZGQuanMiLCJzY3JpcHRzQnVpbGQvY29tcG9uZW50cy9tdWx0aXBseS5qcyIsInNjcmlwdHNCdWlsZC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGFkZCA9IGZ1bmN0aW9uIGFkZChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYWRkOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikge1xuICAgIGNvbnNvbGUubG9nKCdtdWx0aXBseScpO1xuICAgIHJldHVybiBhICogYjtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG11bHRpcGx5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9hZGQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWRkLmpzJyk7XG5cbnZhciBfYWRkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZCk7XG5cbnZhciBfbXVsdGlwbHkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbXVsdGlwbHkuanMnKTtcblxudmFyIF9tdWx0aXBseTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tdWx0aXBseSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBhID0gNDtcbnZhciBiID0gNTtcbmNvbnNvbGUubG9nKCgwLCBfYWRkMi5kZWZhdWx0KShhLCBiKSk7XG5jb25zb2xlLmxvZygoMCwgX211bHRpcGx5Mi5kZWZhdWx0KShhLCBiKSk7Il19
