"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = require("../utils/regex");

const AUTOLINK_MAILTO_CHECK_R = /mailto:/i;
const mailto = {
  match: (0, _regex.inlineRegex)(/^<([^ >]+@[^ >]+)>/),
  parse: capture => {
    const address = capture[1];
    let target = capture[1]; // Check for a `mailto:` already existing in the link:

    if (!AUTOLINK_MAILTO_CHECK_R.test(target)) {
      target = "mailto:".concat(target);
    }

    return {
      type: 'link',
      content: [{
        type: 'text',
        content: address
      }],
      target
    };
  }
};
var _default = mailto;
exports.default = _default;