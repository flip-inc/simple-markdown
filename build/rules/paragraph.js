'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _regex = require('../utils/regex');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paragraph = {
  match: (0, _regex.blockRegex)(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
  parse: _utils.parseCaptureInline,
  react: function react(node, output, state) {
    return _react2.default.createElement(
      'p',
      { key: state.key },
      output(node.content, state)
    );
  },
  html: function html(node, output, state) {
    return (0, _utils.getHtmlTag)('p', output(node.content, state));
  }
};

exports.default = paragraph;