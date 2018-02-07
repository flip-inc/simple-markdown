'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var heading = {
  match: (0, _utils.blockRegex)(/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n *)+\n/),
  parse: function parse(capture, _parse, state) {
    return {
      level: capture[1].length,
      content: (0, _utils.parseInline)(_parse, capture[2], state)
    };
  },
  react: function react(node, output, state) {
    var Node = 'h' + node.level;
    return _react2.default.createElement(
      Node,
      { key: state.key },
      output(node.content, state)
    );
  },
  html: function html(node, output, state) {
    return (0, _utils.getHtmlTag)('h' + node.level, output(node.content, state));
  }
};

exports.default = heading;