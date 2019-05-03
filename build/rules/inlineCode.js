"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _regex = require("../utils/regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const inlineCode = {
  match: (0, _regex.inlineRegex)(/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/),
  parse: capture => ({
    content: capture[2]
  }),
  react: (node, output, state) => _react.default.createElement("code", {
    key: state.key
  }, node.content),
  html: node => (0, _utils.getHtmlTag)('code', node.content)
};
var _default = inlineCode;
exports.default = _default;