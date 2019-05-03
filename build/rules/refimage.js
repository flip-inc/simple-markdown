"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _regex = require("../utils/regex");

const LINK_INSIDE = '(?:\\[[^\\]]*\\]|[^\\]]|\\](?=[^\\[]*\\]))*';
const refimage = {
  match: (0, _regex.inlineRegex)(new RegExp("^!\\[(".concat(LINK_INSIDE, ")\\]\\s*\\[([^\\]]*)\\]"))),
  parse: (capture, _parse, state) => (0, _utils.parseRef)(capture, state, {
    type: 'image',
    alt: capture[1]
  })
};
var _default = refimage;
exports.default = _default;