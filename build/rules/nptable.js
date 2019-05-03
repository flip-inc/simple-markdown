"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _tables = require("../utils/tables");

const nptable = {
  match: (0, _utils.blockRegex)(_tables.NPTABLE_REGEX),
  // For perseus-markdown temporary backcompat:
  regex: _tables.NPTABLE_REGEX,
  parse: _tables.parseNpTable
};
var _default = nptable;
exports.default = _default;