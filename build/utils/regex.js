"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anyScopeRegex = exports.blockRegex = exports.inlineRegex = void 0;

// Creates a match function for an inline scoped element from a regex
const inlineRegex = regex => {
  const match = (source, state) => {
    if (state.inline) {
      return regex.exec(source);
    }

    return null;
  };

  match.regex = regex;
  return match;
}; // Creates a match function for a block scoped element from a regex


exports.inlineRegex = inlineRegex;

const blockRegex = regex => {
  const match = (source, state) => {
    if (state.inline) {
      return null;
    }

    return regex.exec(source);
  };

  match.regex = regex;
  return match;
}; // Creates a match function from a regex, ignoring block/inline scope


exports.blockRegex = blockRegex;

const anyScopeRegex = regex => {
  const match = source => regex.exec(source);

  match.regex = regex;
  return match;
};

exports.anyScopeRegex = anyScopeRegex;