"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _regex = require("../utils/regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hr = {
  match: (0, _regex.blockRegex)(/^( *[-*_]){3,} *(?:\n *)+\n/),
  parse: () => ({}),
  react: (node, output, state) => _react.default.createElement("hr", {
    key: state.key
  }),
  html: () => '<hr>'
};
var _default = hr;
exports.default = _default;