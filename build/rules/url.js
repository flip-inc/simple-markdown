"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = require("../utils/regex");

const url = {
  match: (0, _regex.inlineRegex)(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
  parse: capture => ({
    type: 'link',
    content: [{
      type: 'text',
      content: capture[1]
    }],
    target: capture[1],
    title: undefined
  })
};
var _default = url;
exports.default = _default;