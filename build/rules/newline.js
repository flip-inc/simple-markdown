'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../utils/regex');

var newline = {
  match: (0, _regex.blockRegex)(/^(?:\n *)*\n/),
  parse: function parse() {
    return {};
  },
  react: function react() {
    return '\n';
  },
  html: function html() {
    return '\n';
  }
};

exports.default = newline;