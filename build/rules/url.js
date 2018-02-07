'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../utils/regex');

var url = {
  match: (0, _regex.inlineRegex)(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
  parse: function parse(capture) {
    return {
      type: 'link',
      content: [{
        type: 'text',
        content: capture[1]
      }],
      target: capture[1],
      title: undefined
    };
  }
};

exports.default = url;