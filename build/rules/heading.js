"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _slugify = _interopRequireDefault(require("slugify"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const heading = {
  match: (0, _utils.blockRegex)(/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n *)+\n/),

  parse(capture, parse, state) {
    return {
      level: capture[1].length,
      content: (0, _utils.parseInline)(parse, capture[2], state)
    };
  },

  react(node, output, state) {
    const Node = "h".concat(node.level);
    const compiledOutput = output(node.content, state);
    let id = null;

    if (compiledOutput.length === 1 && typeof compiledOutput[0] === 'string') {
      id = (0, _slugify.default)(compiledOutput[0], {
        lower: true
      }).replace(/[^a-zA-Z0-9-]/g, '');
    }

    return _react.default.createElement(Node, {
      id: id,
      key: state.key
    }, compiledOutput);
  },

  html(node, output, state) {
    return (0, _utils.getHtmlTag)("h".concat(node.level), output(node.content, state));
  }

};
var _default = heading;
exports.default = _default;