'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../utils/regex');

var autolink = {
  match: (0, _regex.inlineRegex)(/^<([^ >]+:\/[^ >]+)>/),
  parse: function parse(capture) {
    return {
      type: 'link',
      content: [{
        type: 'text',
        content: capture[1]
      }],
      target: capture[1]
    };
  }
};

exports.default = autolink;