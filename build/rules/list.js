'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIST_BULLET = '(?:[*+-]|\\d+\\.)';
var LIST_ITEM_PREFIX = '( *)(' + LIST_BULLET + ') +';
var LIST_ITEM_PREFIX_R = new RegExp('^' + LIST_ITEM_PREFIX);
var BLOCK_END_R = /\n{2,}$/;
var LIST_LOOKBEHIND_R = /^$|\n *$/;
var LIST_R = new RegExp('^( *)(' + LIST_BULLET + ') [\\s\\S]+?(?:\n{2,}(?! )(?!\\1' + LIST_BULLET + ' )\\n*|\\s*\n*$)');
var LIST_ITEM_R = new RegExp(LIST_ITEM_PREFIX + '[^\\n]*(?:\\n(?!\\1' + LIST_BULLET + ' )[^\\n]*)*(\n|$)', 'gm');
var LIST_BLOCK_END_R = BLOCK_END_R;
var LIST_ITEM_END_R = / *\n+$/;

var list = {
  match: function match(source, state, prevCapture) {
    // We only want to break into a list if we are at the start of a
    // line. This is to avoid parsing "hi * there" with "* there"
    // becoming a part of a list.
    // You might wonder, "but that's inline, so of course it wouldn't
    // start a list?". You would be correct! Except that some of our
    // lists can be inline, because they might be inside another list,
    // in which case we can parse with inline scope, but need to allow
    // nested lists inside this inline scope.
    var isStartOfLine = LIST_LOOKBEHIND_R.test(prevCapture);
    var isListBlock = state._list || !state.inline; // eslint-disable-line no-underscore-dangle

    if (isStartOfLine && isListBlock) {
      return LIST_R.exec(source);
    }

    return null;
  },
  parse: function parse(capture, _parse, state) {
    var bullet = capture[2];
    var ordered = bullet.length > 1;
    var start = ordered ? +bullet : undefined;
    var items = capture[0].replace(LIST_BLOCK_END_R, '\n').match(LIST_ITEM_R);

    var lastItemWasAParagraph = false;
    var itemContent = items.map(function (item, i) {
      // We need to see how far indented this item is:
      var space = LIST_ITEM_PREFIX_R.exec(item)[0].length;
      // And then we construct a regex to "unindent" the subsequent
      // lines of the items by that amount:
      var spaceRegex = new RegExp('^ {1,' + space + '}', 'gm');

      // Before processing the item, we need a couple things
      var content = item
      // remove indents on trailing lines:
      .replace(spaceRegex, '')
      // remove the bullet:
      .replace(LIST_ITEM_PREFIX_R, '');

      // Handling "loose" lists, like:
      //
      //  * this is wrapped in a paragraph
      //
      //  * as is this
      //
      //  * as is this
      var isLastItem = i === items.length - 1;
      var containsBlocks = content.indexOf('\n\n') !== -1;

      // Any element in a list is a block if it contains multiple
      // newlines. The last element in the list can also be a block
      // if the previous item in the list was a block (this is
      // because non-last items in the list can end with \n\n, but
      // the last item can't, so we just "inherit" this property
      // from our previous element).
      var thisItemIsAParagraph = containsBlocks || isLastItem && lastItemWasAParagraph;
      lastItemWasAParagraph = thisItemIsAParagraph;

      // backup our state for restoration afterwards. We're going to
      // want to set state._list to true, and state.inline depending
      // on our list's looseness.
      var oldStateInline = state.inline;
      var oldStateList = state._list; // eslint-disable-line no-underscore-dangle
      state._list = true; // eslint-disable-line

      // Parse inline if we're in a tight list, or block if we're in
      // a loose list.
      var adjustedContent = void 0;
      if (thisItemIsAParagraph) {
        state.inline = false; // eslint-disable-line
        adjustedContent = content.replace(LIST_ITEM_END_R, '\n\n');
      } else {
        state.inline = true; // eslint-disable-line
        adjustedContent = content.replace(LIST_ITEM_END_R, '');
      }

      var result = _parse(adjustedContent, state);

      // Restore our state before returning
      state.inline = oldStateInline; // eslint-disable-line
      state._list = oldStateList; // eslint-disable-line
      return result;
    });

    return {
      items: itemContent,
      ordered: ordered,
      start: start
    };
  },
  react: function react(node, output, state) {
    if (node.ordered) {
      return _react2.default.createElement(
        'ol',
        { start: node.start, key: state.key },
        (0, _map2.default)(node.items, function (item, i) {
          return _react2.default.createElement(
            'li',
            { key: i },
            output(item, state)
          );
        })
      );
    }

    return _react2.default.createElement(
      'ul',
      { key: state.key },
      (0, _map2.default)(node.items, function (item, i) {
        return _react2.default.createElement(
          'li',
          { key: i },
          output(item, state)
        );
      })
    );
  },
  html: function html(node, output, state) {
    var listItems = node.items.map(function (item) {
      return (0, _utils.getHtmlTag)('li', output(item, state));
    }).join('');

    var listTag = node.ordered ? 'ol' : 'ul';
    var attributes = { start: node.start };

    return (0, _utils.getHtmlTag)(listTag, listItems, attributes);
  }
};

exports.default = list;