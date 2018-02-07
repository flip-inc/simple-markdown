'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _regex = require('../utils/regex');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codeBlock = {
  match: (0, _regex.blockRegex)(/^(?: {4}[^\n]+\n*)+(?:\n *)+\n/),
  parse: function parse(capture) {
    var content = capture[0].replace(/^ {4}/gm, '').replace(/\n+$/, '');

    return {
      lang: undefined,
      content: content
    };
  },
  react: function react(node, output, state) {
    var className = node.lang ? 'markdown-code-' + node.lang : undefined;

    return _react2.default.createElement(
      'pre',
      { key: state.key },
      _react2.default.createElement(
        'code',
        { className: className },
        node.content
      )
    );
  },
  html: function html(node) {
    var className = node.lang ? 'markdown-code-' + node.lang : undefined;
    var block = (0, _utils.getHtmlTag)('code', node.content, { class: className });

    return (0, _utils.getHtmlTag)('pre', block);
  }
};

exports.default = codeBlock;