'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tables = require('../utils/tables');

var _regex = require('../utils/regex');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table = {
  match: (0, _regex.blockRegex)(/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/),
  parse: _tables.parseTable,
  react: function react(node, output, state) {
    var getStyle = function getStyle(colIndex) {
      if (node.align[colIndex] == null) return {};

      return {
        textAlign: node.align[colIndex]
      };
    };

    return _react2.default.createElement(
      'table',
      { key: state.key },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          (0, _map2.default)(node.header, function (content, i) {
            return _react2.default.createElement(
              'th',
              { key: i, style: getStyle(i), scope: 'col' },
              output(content, state)
            );
          })
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        (0, _map2.default)(node.cells, function (row, r) {
          return _react2.default.createElement(
            'tr',
            { key: r },
            (0, _map2.default)(row, function (content, c) {
              return _react2.default.createElement(
                'td',
                { key: c, style: getStyle(c) },
                output(content, state)
              );
            })
          );
        })
      )
    );
  },
  html: function html(node, output, state) {
    var getStyle = function getStyle(colIndex) {
      if (node.align[colIndex] == null) return '';

      return 'text-align:' + node.align[colIndex] + ';';
    };

    var headers = (0, _map2.default)(node.header, function (content, i) {
      return (0, _utils.getHtmlTag)('th', output(content, state), {
        style: getStyle(i),
        scope: 'col'
      });
    }).join('');

    var rows = (0, _map2.default)(node.cells, function (row) {
      var cols = (0, _map2.default)(row, function (content, c) {
        return (0, _utils.getHtmlTag)('td', output(content, state), { style: getStyle(c) });
      }).join('');

      return (0, _utils.getHtmlTag)('tr', cols);
    }).join('');

    var thead = (0, _utils.getHtmlTag)('thead', (0, _utils.getHtmlTag)('tr', headers));
    var tbody = (0, _utils.getHtmlTag)('tbody', rows);

    return (0, _utils.getHtmlTag)('table', thead + tbody);
  }
};

exports.default = table;