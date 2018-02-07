'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _regex = require('../utils/regex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var u = {
  match: (0, _regex.inlineRegex)(/^__([\s\S]+?)__(?!_)/),
  quality: function quality(capture) {
    return capture[0].length;
  },
  parse: _utils.parseCaptureInline,
  react: function react(node, output, state) {
    return _react2.default.createElement(
      'u',
      { key: state.key },
      output(node.content, state)
    );
  },
  html: function html(node, output, state) {
    return (0, _utils.getHtmlTag)('u', output(node.content, state));
  }
};

exports.default = u;