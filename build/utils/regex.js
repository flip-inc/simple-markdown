"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Creates a match function for an inline scoped element from a regex
var inlineRegex = exports.inlineRegex = function inlineRegex(regex) {
  var match = function match(source, state) {
    if (state.inline) {
      return regex.exec(source);
    }
    return null;
  };
  match.regex = regex;
  return match;
};

// Creates a match function for a block scoped element from a regex
var blockRegex = exports.blockRegex = function blockRegex(regex) {
  var match = function match(source, state) {
    if (state.inline) {
      return null;
    }
    return regex.exec(source);
  };
  match.regex = regex;
  return match;
};

// Creates a match function from a regex, ignoring block/inline scope
var anyScopeRegex = exports.anyScopeRegex = function anyScopeRegex(regex) {
  var match = function match(source) {
    return regex.exec(source);
  };
  match.regex = regex;
  return match;
};