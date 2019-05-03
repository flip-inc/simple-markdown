"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _regex = require("../utils/regex");

const LINK_INSIDE = '(?:\\[[^\\]]*\\]|[^\\]]|\\](?=[^\\[]*\\]))*';
const reflink = {
  match: (0, _regex.inlineRegex)(new RegExp( // The first [part] of the link
  "^\\[(".concat(LINK_INSIDE, ")\\]") + // The [ref] target of the link
  '\\s*\\[([^\\]]*)\\]')),
  parse: (capture, _parse, state) => (0, _utils.parseRef)(capture, state, {
    type: 'link',
    content: _parse(capture[1], state)
  })
};
var _default = reflink;
exports.default = _default;