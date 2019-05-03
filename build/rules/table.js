"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireDefault(require("lodash/map"));

var _react = _interopRequireDefault(require("react"));

var _tables = require("../utils/tables");

var _regex = require("../utils/regex");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const table = {
  match: (0, _regex.blockRegex)(/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/),
  parse: _tables.parseTable,

  react(node, output, state) {
    const getStyle = colIndex => {
      if (node.align[colIndex] == null) return {};
      return {
        textAlign: node.align[colIndex]
      };
    };

    return _react.default.createElement("table", {
      key: state.key
    }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, (0, _map.default)(node.header, (content, i) => _react.default.createElement("th", {
      key: i,
      style: getStyle(i),
      scope: "col"
    }, output(content, state))))), _react.default.createElement("tbody", null, (0, _map.default)(node.cells, (row, r) => _react.default.createElement("tr", {
      key: r
    }, (0, _map.default)(row, (content, c) => _react.default.createElement("td", {
      key: c,
      style: getStyle(c)
    }, output(content, state)))))));
  },

  html(node, output, state) {
    const getStyle = colIndex => {
      if (node.align[colIndex] == null) return '';
      return "text-align:".concat(node.align[colIndex], ";");
    };

    const headers = (0, _map.default)(node.header, (content, i) => (0, _utils.getHtmlTag)('th', output(content, state), {
      style: getStyle(i),
      scope: 'col'
    })).join('');
    const rows = (0, _map.default)(node.cells, row => {
      const cols = (0, _map.default)(row, (content, c) => (0, _utils.getHtmlTag)('td', output(content, state), {
        style: getStyle(c)
      })).join('');
      return (0, _utils.getHtmlTag)('tr', cols);
    }).join('');
    const thead = (0, _utils.getHtmlTag)('thead', (0, _utils.getHtmlTag)('tr', headers));
    const tbody = (0, _utils.getHtmlTag)('tbody', rows);
    return (0, _utils.getHtmlTag)('table', thead + tbody);
  }

};
var _default = table;
exports.default = _default;