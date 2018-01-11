'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopDefault(ex) {
    return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var jQuery = _interopDefault(require('jquery'));

var add = function add(a, b) {
    return a + b;
};

var multiply = function multiply(a, b) {
    console.log('multiply');
    return a * b;
};

window.jQuery = jQuery;

var display = function display() {
    console.log('display');
    console.log(jQuery(document));
};

var a = 4;
var b = 5;
console.log(add(a, b));
console.log(multiply(a, b));

display();