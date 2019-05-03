"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = require("../utils/regex");

const fence = {
  match: (0, _regex.blockRegex)(/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n/),
  parse: capture => ({
    type: 'codeBlock',
    lang: capture[2] || undefined,
    content: capture[3]
  })
};
var _default = fence;
exports.default = _default;