'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _regex = require('../utils/regex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hr = {
  match: (0, _regex.blockRegex)(/^( *[-*_]){3,} *(?:\n *)+\n/),
  parse: function parse() {
    return {};
  },
  react: function react(node, output, state) {
    return _react2.default.createElement('hr', { key: state.key });
  },
  html: function html() {
    return '<hr>';
  }
};

exports.default = hr;