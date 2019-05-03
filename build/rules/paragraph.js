"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _regex = require("../utils/regex");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const paragraph = {
  match: (0, _regex.blockRegex)(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
  parse: _utils.parseCaptureInline,
  react: (node, output, state) => _react.default.createElement("p", {
    key: state.key
  }, output(node.content, state)),
  html: (node, output, state) => (0, _utils.getHtmlTag)('p', output(node.content, state))
};
var _default = paragraph;
exports.default = _default;