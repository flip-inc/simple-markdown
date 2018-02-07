'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../utils/regex');

var text = {
  // Here we look for anything followed by non-symbols,
  // double newlines, or double-space-newlines
  // We break on any symbol characters so that this grammar
  // is easy to extend without needing to modify this regex
  match: (0, _regex.inlineRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
  parse: function parse(capture) {
    return {
      content: capture[0]
    };
  },
  react: function react(node) {
    return node.content;
  },
  html: function html(node) {
    return node.content;
  }
};

exports.default = text;