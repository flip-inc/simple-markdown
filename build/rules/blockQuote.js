'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _regex = require('../utils/regex');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blockQuote = {
  match: (0, _regex.blockRegex)(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
  parse: function parse(capture, _parse, state) {
    var content = capture[0].replace(/^ *> ?/gm, '');
    return {
      content: _parse(content, state)
    };
  },
  react: function react(node, output, state) {
    return _react2.default.createElement(
      'blockquote',
      { key: state.key },
      output(node.content, state)
    );
  },
  html: function html(node, output, state) {
    return (0, _utils.getHtmlTag)('blockquote', output(node.content, state));
  }
};

exports.default = blockQuote;