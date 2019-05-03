"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = require("../utils/regex");

const text = {
  // Here we look for anything followed by non-symbols,
  // double newlines, or double-space-newlines
  // We break on any symbol characters so that this grammar
  // is easy to extend without needing to modify this regex
  match: (0, _regex.inlineRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
  parse: capture => ({
    content: capture[0]
  }),
  react: node => node.content,
  html: node => node.content
};
var _default = text;
exports.default = _default;