"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _regex = require("../utils/regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const br = {
  match: (0, _regex.anyScopeRegex)(/^ {2,}\n/),
  parse: () => ({}),
  react: (node, output, state) => _react.default.createElement("br", {
    key: state.key
  }),
  html: () => '<br>'
};
var _default = br;
exports.default = _default;