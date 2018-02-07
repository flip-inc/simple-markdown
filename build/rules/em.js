'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _regex = require('../utils/regex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var em = {
  match: (0, _regex.inlineRegex)(new RegExp(
  // only match _s surrounding words.
  '^\\b_' + '((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_' + '\\b' +
  // Or match *s:
  '|' +
  // Only match *s that are followed by a non-space:
  '^\\*(?=\\S)(' +
  // Match at least one of:
  //  - `**`: so that bolds inside italics don't close the
  //          italics
  //  - whitespace: followed by a non-* (we don't
  //          want ' *' to close an italics--it might
  //          start a list)
  //  - non-whitespace, non-* characters
  '(?:\\*\\*|\\s+(?:[^\\*\\s]|\\*\\*)|[^\\s\\*])+?' +
  // followed by a non-space, non-* then *
  ')\\*(?!\\*)')),
  quality: function quality(capture) {
    return capture[0].length + 0.2;
  },
  parse: function parse(capture, _parse, state) {
    return {
      content: _parse(capture[2] || capture[1], state)
    };
  },
  react: function react(node, output, state) {
    return _react2.default.createElement(
      'em',
      { key: state.key },
      output(node.content, state)
    );
  },
  html: function html(node, output, state) {
    return (0, _utils.getHtmlTag)('em', output(node.content, state));
  }
};

exports.default = em;