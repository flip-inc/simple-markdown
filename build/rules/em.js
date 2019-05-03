"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _regex = require("../utils/regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const em = {
  match: (0, _regex.inlineRegex)(new RegExp( // only match _s surrounding words.
  '^\\b_' + '((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_' + '\\b' + // Or match *s:
  '|' + // Only match *s that are followed by a non-space:
  '^\\*(?=\\S)(' + // Match at least one of:
  //  - `**`: so that bolds inside italics don't close the
  //          italics
  //  - whitespace: followed by a non-* (we don't
  //          want ' *' to close an italics--it might
  //          start a list)
  //  - non-whitespace, non-* characters
  '(?:\\*\\*|\\s+(?:[^\\*\\s]|\\*\\*)|[^\\s\\*])+?' + // followed by a non-space, non-* then *
  ')\\*(?!\\*)')),
  quality: capture => capture[0].length + 0.2,
  parse: (capture, _parse, state) => ({
    content: _parse(capture[2] || capture[1], state)
  }),
  react: (node, output, state) => _react.default.createElement("em", {
    key: state.key
  }, output(node.content, state)),
  html: (node, output, state) => (0, _utils.getHtmlTag)('em', output(node.content, state))
};
var _default = em;
exports.default = _default;