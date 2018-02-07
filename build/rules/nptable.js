'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _tables = require('../utils/tables');

var nptable = {
  match: (0, _utils.blockRegex)(_tables.NPTABLE_REGEX),
  // For perseus-markdown temporary backcompat:
  regex: _tables.NPTABLE_REGEX,
  parse: _tables.parseNpTable
};

exports.default = nptable;