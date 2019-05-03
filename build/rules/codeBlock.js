"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _regex = require("../utils/regex");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const codeBlock = {
  match: (0, _regex.blockRegex)(/^(?: {4}[^\n]+\n*)+(?:\n *)+\n/),

  parse(capture) {
    const content = capture[0].replace(/^ {4}/gm, '').replace(/\n+$/, '');
    return {
      lang: undefined,
      content
    };
  },

  react(node, output, state) {
    const className = node.lang ? "markdown-code-".concat(node.lang) : undefined;
    return _react.default.createElement("pre", {
      key: state.key
    }, _react.default.createElement("code", {
      className: className
    }, node.content));
  },

  html(node) {
    const className = node.lang ? "markdown-code-".concat(node.lang) : undefined;
    const block = (0, _utils.getHtmlTag)('code', node.content, {
      class: className
    });
    return (0, _utils.getHtmlTag)('pre', block);
  }

};
var _default = codeBlock;
exports.default = _default;