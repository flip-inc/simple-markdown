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
const image = {
  match: (0, _regex.inlineRegex)(new RegExp("^!\\[(".concat(LINK_INSIDE, ")\\]\\(").concat(LINK_HREF_AND_TITLE, "\\)"))),
  parse: capture => ({
    alt: capture[1],
    target: (0, _urls.unescapeUrl)(capture[2]),
    title: capture[3]
  }),
  react: (node, output, state) => _react.default.createElement("img", {
    key: state.key,
    src: (0, _urls.sanitizeUrl)(node.target),
    title: node.title,
    alt: node.alt
  }),
  html: node => (0, _utils.getHtmlTag)('img', '', {
    src: (0, _urls.sanitizeUrl)(node.target),
    alt: node.alt,
    title: node.title
  }, false)
};
var _default = image;
exports.default = _default;