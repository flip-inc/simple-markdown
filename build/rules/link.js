'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _regex = require('../utils/regex');

var _urls = require('../utils/urls');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LINK_INSIDE = '(?:\\[[^\\]]*\\]|[^\\]]|\\](?=[^\\[]*\\]))*';
var LINK_HREF_AND_TITLE = "\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*";

var link = {
  match: (0, _regex.inlineRegex)(new RegExp('^\\[(' + LINK_INSIDE + ')\\]\\(' + LINK_HREF_AND_TITLE + '\\)')),
  parse: function parse(capture, _parse, state) {
    return {
      content: _parse(capture[1], state),
      target: (0, _urls.unescapeUrl)(capture[2]),
      title: capture[3]
    };
  },
  react: function react(node, output, state) {
    return _react2.default.createElement(
      'a',
      {
        key: state.key,
        href: (0, _urls.sanitizeUrl)(node.target),
        title: node.title },
      output(node.content, state)
    );
  },
  html: function html(node, output, state) {
    return (0, _utils.getHtmlTag)('a', output(node.content, state), {
      href: (0, _urls.sanitizeUrl)(node.target),
      title: node.title
    });
  }
};

exports.default = link;