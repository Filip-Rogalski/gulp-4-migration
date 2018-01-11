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

var a = 5;
var b = 5;
var c = 6;
console.log((0, _add2.default)(a, b));
console.log((0, _multiply2.default)(a, b));
console.log((0, _multiply2.default)(c, b));
},{"./components/add.js":1,"./components/multiply.js":2}]},{},[3]);
