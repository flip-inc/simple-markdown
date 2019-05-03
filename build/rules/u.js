"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _regex = require("../utils/regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const u = {
  match: (0, _regex.inlineRegex)(/^__([\s\S]+?)__(?!_)/),
  quality: capture => capture[0].length,
  parse: _utils.parseCaptureInline,
  react: (node, output, state) => _react.default.createElement("u", {
    key: state.key
  }, output(node.content, state)),
  html: (node, output, state) => (0, _utils.getHtmlTag)('u', output(node.content, state))
};
var _default = u;
exports.default = _default;