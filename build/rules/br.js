'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _regex = require('../utils/regex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var br = {
  match: (0, _regex.anyScopeRegex)(/^ {2,}\n/),
  parse: function parse() {
    return {};
  },
  react: function react(node, output, state) {
    return _react2.default.createElement('br', { key: state.key });
  },
  html: function html() {
    return '<br>';
  }
};

exports.default = br;