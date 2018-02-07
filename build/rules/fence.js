'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../utils/regex');

var fence = {
  match: (0, _regex.blockRegex)(/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n/),
  parse: function parse(capture) {
    return {
      type: 'codeBlock',
      lang: capture[2] || undefined,
      content: capture[3]
    };
  }
};

exports.default = fence;