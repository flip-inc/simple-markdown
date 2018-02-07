'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _regex = require('../utils/regex');

var LINK_INSIDE = '(?:\\[[^\\]]*\\]|[^\\]]|\\](?=[^\\[]*\\]))*';

var reflink = {
  match: (0, _regex.inlineRegex)(new RegExp(
  // The first [part] of the link
  '^\\[(' + LINK_INSIDE + ')\\]' +
  // The [ref] target of the link
  '\\s*\\[([^\\]]*)\\]')),
  parse: function parse(capture, _parse, state) {
    return (0, _utils.parseRef)(capture, state, {
      type: 'link',
      content: _parse(capture[1], state)
    });
  }
};

exports.default = reflink;