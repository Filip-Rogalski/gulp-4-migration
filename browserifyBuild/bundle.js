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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.jQuery = _jquery2.default;

var display = function display() {
    console.log('display');
    console.log((0, _jquery2.default)(document));
};

exports.default = display;
},{"jquery":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var multiply = function multiply(a, b) {
    console.log('multiply');
    return a * b;
};

exports.default = multiply;
},{}],4:[function(require,module,exports){
'use strict';

var _add = require('./components/add.js');

var _add2 = _interopRequireDefault(_add);

var _multiply = require('./components/multiply.js');

var _multiply2 = _interopRequireDefault(_multiply);

var _display = require('./components/display.js');

var _display2 = _interopRequireDefault(_display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 4;
var b = 5;
console.log((0, _add2.default)(a, b));
console.log((0, _multiply2.default)(a, b));

(0, _display2.default)();
},{"./components/add.js":1,"./components/display.js":2,"./components/multiply.js":3}]},{},[4]);
