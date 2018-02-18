'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slugify = require('slugify');

var _slugify2 = _interopRequireDefault(_slugify);

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

    var compiledOutput = output(node.content, state);
    var id = '';

    if (compiledOutput.length === 1 && typeof compiledOutput[0] === 'string') {
      id = (0, _slugify2.default)(compiledOutput[0]);
    }

    return _react2.default.createElement(
      Node,
      { id: id, key: state.key },
      compiledOutput
    );
  },
  html: function html(node, output, state) {
    return (0, _utils.getHtmlTag)('h' + node.level, output(node.content, state));
  }
};

exports.default = heading;