"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _regex = require("../utils/regex");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const blockQuote = {
  match: (0, _regex.blockRegex)(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),

  parse(capture, parse, state) {
    const content = capture[0].replace(/^ *> ?/gm, '');
    return {
      content: parse(content, state)
    };
  },

  react(node, output, state) {
    return _react.default.createElement("blockquote", {
      key: state.key
    }, output(node.content, state));
  },

  html(node, output, state) {
    return (0, _utils.getHtmlTag)('blockquote', output(node.content, state));
  }

};
var _default = blockQuote;
exports.default = _default;