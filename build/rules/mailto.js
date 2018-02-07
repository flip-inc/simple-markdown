'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../utils/regex');

var AUTOLINK_MAILTO_CHECK_R = /mailto:/i;

var mailto = {
  match: (0, _regex.inlineRegex)(/^<([^ >]+@[^ >]+)>/),
  parse: function parse(capture) {
    var address = capture[1];
    var target = capture[1];

    // Check for a `mailto:` already existing in the link:
    if (!AUTOLINK_MAILTO_CHECK_R.test(target)) {
      target = 'mailto:' + target;
    }

    return {
      type: 'link',
      content: [{
        type: 'text',
        content: address
      }],
      target: target
    };
  }
};

exports.default = mailto;