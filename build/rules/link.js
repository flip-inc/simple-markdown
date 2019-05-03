"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _regex = require("../utils/regex");

var _urls = require("../utils/urls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LINK_INSIDE = '(?:\\[[^\\]]*\\]|[^\\]]|\\](?=[^\\[]*\\]))*';
const LINK_HREF_AND_TITLE = "\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*";
const link = {
  match: (0, _regex.inlineRegex)(new RegExp("^\\[(".concat(LINK_INSIDE, ")\\]\\(").concat(LINK_HREF_AND_TITLE, "\\)"))),
  parse: (capture, _parse, state) => ({
    content: _parse(capture[1], state),
    target: (0, _urls.unescapeUrl)(capture[2]),
    title: capture[3]
  }),
  react: (node, output, state) => _react.default.createElement("a", {
    key: state.key,
    href: (0, _urls.sanitizeUrl)(node.target),
    title: node.title
  }, output(node.content, state)),
  html: (node, output, state) => (0, _utils.getHtmlTag)('a', output(node.content, state), {
    href: (0, _urls.sanitizeUrl)(node.target),
    title: node.title
  })
};
var _default = link;
exports.default = _default;