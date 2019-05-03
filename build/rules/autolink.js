"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = require("../utils/regex");

const autolink = {
  match: (0, _regex.inlineRegex)(/^<([^ >]+:\/[^ >]+)>/),
  parse: capture => ({
    type: 'link',
    content: [{
      type: 'text',
      content: capture[1]
    }],
    target: capture[1]
  })
};
var _default = autolink;
exports.default = _default;