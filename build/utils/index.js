'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockRegex = blockRegex;
exports.getHtmlTag = getHtmlTag;
exports.parseInline = parseInline;
exports.parseCaptureInline = parseCaptureInline;
exports.parseRef = parseRef;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Creates a match function for a block scoped element from a regex
function blockRegex(regex) {
  var match = function match(source, state) {
    if (state.inline) {
      return null;
    }

    return regex.exec(source);
  };
  match.regex = regex;
  return match;
}

// Returns a closed HTML tag.
// tagName: Name of HTML tag (eg. "em" or "a")
// content: Inner content of tag
// attributes: Optional extra attributes of tag as an object of key-value pairs
//   eg. { "href": "http://google.com" }. Falsey attributes are filtered out.
// isClosed: boolean that controls whether tag is closed or not (eg. img tags).
//   defaults to true
function getHtmlTag(tagName, content, attributes, isClosed) {
  attributes = attributes || {}; // eslint-disable-line no-param-reassign
  isClosed = typeof isClosed !== 'undefined' ? isClosed : true; // eslint-disable-line no-param-reassign

  var attributeString = '';
  _lodash2.default.map(attributes, function (value, attr) {
    if (Object.prototype.hasOwnProperty.call(attributes, attr) && attributes[attr]) {
      attributeString += ' ' + attr + '="' + attributes[attr] + '"';
    }
  });

  var unclosedTag = '<' + (tagName + attributeString) + '>';
  if (isClosed) {
    return unclosedTag + content + '</' + tagName + '>';
  }

  return unclosedTag;
}

// Parse some content with the parser `parse`, with state.inline
// set to true. Useful for block elements; not generally necessary
// to be used by inline elements (where state.inline is already true.
function parseInline(parse, content, state) {
  var isCurrentlyInline = state.inline || false;
  state.inline = true; // eslint-disable-line no-param-reassign
  var result = parse(content, state);
  state.inline = isCurrentlyInline; // eslint-disable-line no-param-reassign
  return result;
}

function parseCaptureInline(capture, parse, state) {
  return {
    content: parseInline(parse, capture[1], state)
  };
}

function parseRef(capture, state, refNode) {
  var ref = (capture[2] || capture[1]).replace(/\s+/g, ' ').toLowerCase();

  // We store information about previously seen defs on
  // state._defs (_ to deconflict with client-defined
  // state). If the def for this reflink/refimage has
  // already been seen, we can use its target/source
  // and title here:
  if (state._defs && state._defs[ref]) {
    // eslint-disable-line no-underscore-dangle
    var def = state._defs[ref]; // eslint-disable-line no-underscore-dangle
    // `refNode` can be a link or an image. Both use
    // target and title properties.
    refNode.target = def.target; // eslint-disable-line no-param-reassign
    refNode.title = def.title; // eslint-disable-line no-param-reassign
  }

  // In case we haven't seen our def yet (or if someone
  // overwrites that def later on), we add this node
  // to the list of ref nodes for that def. Then, when
  // we find the def, we can modify this link/image AST
  // node :).
  // I'm sorry.
  state._refs = state._refs || {}; // eslint-disable-line
  state._refs[ref] = state._refs[ref] || []; // eslint-disable-line
  state._refs[ref].push(refNode); // eslint-disable-line

  return refNode;
}