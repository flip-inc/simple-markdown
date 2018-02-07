'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _regex = require('../utils/regex');

var LINK_INSIDE = '(?:\\[[^\\]]*\\]|[^\\]]|\\](?=[^\\[]*\\]))*';

var refimage = {
  match: (0, _regex.inlineRegex)(new RegExp('^!\\[(' + LINK_INSIDE + ')\\]\\s*\\[([^\\]]*)\\]')),
  parse: function parse(capture, _parse, state) {
    return (0, _utils.parseRef)(capture, state, {
      type: 'image',
      alt: capture[1]
    });
  }
};

exports.default = refimage;