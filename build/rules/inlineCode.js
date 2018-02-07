'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _regex = require('../utils/regex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineCode = {
  match: (0, _regex.inlineRegex)(/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/),
  parse: function parse(capture) {
    return {
      content: capture[2]
    };
  },
  react: function react(node, output, state) {
    return _react2.default.createElement(
      'code',
      { key: state.key },
      node.content
    );
  },
  html: function html(node) {
    return (0, _utils.getHtmlTag)('code', node.content);
  }
};

exports.default = inlineCode;