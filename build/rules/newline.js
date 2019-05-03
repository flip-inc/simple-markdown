"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = require("../utils/regex");

const newline = {
  match: (0, _regex.blockRegex)(/^(?:\n *)*\n/),
  parse: () => ({}),
  react: () => '\n',
  html: () => '\n'
};
var _default = newline;
exports.default = _default;