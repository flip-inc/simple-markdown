'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _parse2 = require('../utils/parse');

var lheading = {
  match: (0, _utils.blockRegex)(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
  parse: function parse(capture, _parse, state) {
    return {
      content: (0, _parse2.parseInline)(_parse, capture[1], state),
      level: capture[2] === '=' ? 1 : 2,
      type: 'heading'
    };
  }
};

exports.default = lheading;