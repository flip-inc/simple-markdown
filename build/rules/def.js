'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../utils/regex');

var defRule = {
  match: (0, _regex.blockRegex)(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)?/),
  parse: function parse(capture, _parse, state) {
    var def = capture[1].replace(/\s+/g, ' ').toLowerCase();
    var target = capture[2];
    var title = capture[3];

    // Look for previous links/images using this def
    // If any links/images using this def have already been declared,
    // they will have added themselves to the state._refs[def] list
    // (_ to deconflict with client-defined state). We look through
    // that list of reflinks for this def, and modify those AST nodes
    // with our newly found information now.
    // Sorry :(.
    if (state._refs && state._refs[def]) {
      // eslint-disable-line no-underscore-dangle
      // `refNode` can be a link or an image
      state._refs[def].forEach(function (refNode) {
        // eslint-disable-line no-underscore-dangle
        refNode.target = target; // eslint-disable-line no-param-reassign
        refNode.title = title; // eslint-disable-line no-param-reassign
      });
    }

    // Add this def to our map of defs for any future links/images
    // In case we haven't found any or all of the refs referring to
    // this def yet, we add our def to the table of known defs, so
    // that future reflinks can modify themselves appropriately with
    // this information.
    state._defs = state._defs || {}; // eslint-disable-line
    state._defs[def] = { // eslint-disable-line
      target: target,
      title: title
    };

    // return the relevant parsed information
    // for debugging only.
    return {
      def: def,
      target: target,
      title: title
    };
  },
  react: function react() {
    return null;
  },
  html: function html() {
    return null;
  }
};

exports.default = defRule;