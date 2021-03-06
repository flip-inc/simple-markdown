"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = require("../utils/regex");

const escapeRule = {
  // We don't allow escaping numbers, letters, or spaces here so that
  // backslashes used in plain text still get rendered. But allowing
  // escaping anything else provides a very flexible escape mechanism,
  // regardless of how this grammar is extended.
  match: (0, _regex.inlineRegex)(/^\\([^0-9A-Za-z\s])/),
  parse: capture => ({
    type: 'text',
    content: capture[1]
  })
};
var _default = escapeRule;
exports.default = _default;