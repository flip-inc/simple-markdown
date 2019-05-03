"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _regex = require("../utils/regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const del = {
  match: (0, _regex.inlineRegex)(/^~~(?=\S)([\s\S]*?\S)~~/),
  parse: _utils.parseCaptureInline,
  react: (node, output, state) => _react.default.createElement("del", {
    key: state.key
  }, output(node.content, state)),
  html: (node, output, state) => (0, _utils.getHtmlTag)('del', output(node.content, state))
};
var _default = del;
exports.default = _default;