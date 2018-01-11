'use strict';

var _add = require('./components/add.js');

var _add2 = _interopRequireDefault(_add);

var _multiply = require('./components/multiply.js');

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let a = 4;
let b = 5;
console.log((0, _add2.default)(a, b));
console.log((0, _multiply2.default)(a, b));