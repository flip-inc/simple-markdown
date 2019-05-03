"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _parse2 = require("../utils/parse");

const lheading = {
  match: (0, _utils.blockRegex)(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
  parse: (capture, _parse, state) => ({
    content: (0, _parse2.parseInline)(_parse, capture[1], state),
    level: capture[2] === '=' ? 1 : 2,
    type: 'heading'
  })
};
var _default = lheading;
exports.default = _default;