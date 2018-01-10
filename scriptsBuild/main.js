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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzXFxjb21wb25lbnRzXFxhZGQuanMiLCJzY3JpcHRzXFxjb21wb25lbnRzXFxtdWx0aXBseS5qcyIsInNjcmlwdHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQU0sTUFBTSxTQUFOLEdBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQ2xCLFdBQU8sSUFBSSxDQUFYO0FBQ0gsQ0FGRDs7a0JBSWUsRzs7Ozs7Ozs7QUNKZixJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUN2QixZQUFRLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBTyxJQUFJLENBQVg7QUFDSCxDQUhEOztrQkFLZSxROzs7OztBQ0xmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksSUFBSSxDQUFSO0FBQ0EsSUFBSSxJQUFJLENBQVI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxtQkFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaO0FBQ0EsUUFBUSxHQUFSLENBQVksd0JBQVMsQ0FBVCxFQUFZLENBQVosQ0FBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhZGQgPSAoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuIGEgKyBiO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGQ7IiwiY29uc3QgbXVsdGlwbHkgPSAoYSwgYikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ211bHRpcGx5Jyk7XHJcbiAgICByZXR1cm4gYSAqIGI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG11bHRpcGx5OyIsImltcG9ydCBhZGQgZnJvbSAnLi9jb21wb25lbnRzL2FkZC5qcyc7XHJcbmltcG9ydCBtdWx0aXBseSBmcm9tICcuL2NvbXBvbmVudHMvbXVsdGlwbHkuanMnO1xyXG5cclxubGV0IGEgPSA0O1xyXG5sZXQgYiA9IDU7XHJcbmNvbnNvbGUubG9nKGFkZChhLCBiKSk7XHJcbmNvbnNvbGUubG9nKG11bHRpcGx5KGEsIGIpKTtcclxuIl19
