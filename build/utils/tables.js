'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTable = parseTable;
exports.parseNpTable = parseNpTable;
// predefine regexes so we don't have to create them inside functions
// sure, regex literals should be fast, even inside functions, but they
// aren't in all browsers.
var TABLE_HEADER_TRIM = /^ *| *\| *$/g;
var TABLE_CELLS_TRIM = /\n+$/;
var PLAIN_TABLE_ROW_TRIM = /^ *\| *| *\| *$/g;
var NPTABLE_ROW_TRIM = /^ *| *$/g;
var TABLE_ROW_SPLIT = / *\| */;

var TABLE_RIGHT_ALIGN = /^ *-+: *$/;
var TABLE_CENTER_ALIGN = /^ *:-+: *$/;
var TABLE_LEFT_ALIGN = /^ *:-+ *$/;

function parseTableAlignCapture(alignCapture) {
  if (TABLE_RIGHT_ALIGN.test(alignCapture)) {
    return 'right';
  } else if (TABLE_CENTER_ALIGN.test(alignCapture)) {
    return 'center';
  } else if (TABLE_LEFT_ALIGN.test(alignCapture)) {
    return 'left';
  }

  return null;
}

function parseTableHeader(trimRegex, capture, parse, state) {
  var headerText = capture[1].replace(trimRegex, '').split(TABLE_ROW_SPLIT);

  return headerText.map(function (text) {
    return parse(text, state);
  });
}

function parseTableAlign(trimRegex, capture) {
  var alignText = capture[2].replace(trimRegex, '').split(TABLE_ROW_SPLIT);

  return alignText.map(parseTableAlignCapture);
}

function parseTableCells(capture, parse, state) {
  var rowsText = capture[3].replace(TABLE_CELLS_TRIM, '').split('\n');

  return rowsText.map(function (rowText) {
    var cellText = rowText.replace(PLAIN_TABLE_ROW_TRIM, '').split(TABLE_ROW_SPLIT);
    return cellText.map(function (text) {
      return parse(text, state);
    });
  });
}

function parseNpTableCells(capture, parse, state) {
  var rowsText = capture[3].replace(TABLE_CELLS_TRIM, '').split('\n');

  return rowsText.map(function (rowText) {
    var cellText = rowText.split(TABLE_ROW_SPLIT);
    return cellText.map(function (text) {
      return parse(text, state);
    });
  });
}

function parseTable(capture, parse, state) {
  state.inline = true;
  var header = parseTableHeader(TABLE_HEADER_TRIM, capture, parse, state);
  var align = parseTableAlign(TABLE_HEADER_TRIM, capture, parse, state);
  var cells = parseTableCells(capture, parse, state);
  state.inline = false;

  return {
    type: 'table',
    header: header,
    align: align,
    cells: cells
  };
}

function parseNpTable(capture, parse, state) {
  state.inline = true;
  var header = parseTableHeader(NPTABLE_ROW_TRIM, capture, parse, state);
  var align = parseTableAlign(NPTABLE_ROW_TRIM, capture, parse, state);
  var cells = parseNpTableCells(capture, parse, state);
  state.inline = false;

  return {
    type: 'table',
    header: header,
    align: align,
    cells: cells
  };
}

var NPTABLE_REGEX = exports.NPTABLE_REGEX = /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/;