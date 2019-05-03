"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _autolink = _interopRequireDefault(require("./autolink"));

var _blockQuote = _interopRequireDefault(require("./blockQuote"));

var _br = _interopRequireDefault(require("./br"));

var _codeBlock = _interopRequireDefault(require("./codeBlock"));

var _def = _interopRequireDefault(require("./def"));

var _del = _interopRequireDefault(require("./del"));

var _em = _interopRequireDefault(require("./em"));

var _escape = _interopRequireDefault(require("./escape"));

var _fence = _interopRequireDefault(require("./fence"));

var _heading = _interopRequireDefault(require("./heading"));

var _hr = _interopRequireDefault(require("./hr"));

var _image = _interopRequireDefault(require("./image"));

var _inlineCode = _interopRequireDefault(require("./inlineCode"));

var _lheading = _interopRequireDefault(require("./lheading"));

var _link = _interopRequireDefault(require("./link"));

var _list = _interopRequireDefault(require("./list"));

var _mailto = _interopRequireDefault(require("./mailto"));

var _newline = _interopRequireDefault(require("./newline"));

var _nptable = _interopRequireDefault(require("./nptable"));

var _paragraph = _interopRequireDefault(require("./paragraph"));

var _refimage = _interopRequireDefault(require("./refimage"));

var _reflink = _interopRequireDefault(require("./reflink"));

var _strong = _interopRequireDefault(require("./strong"));

var _table = _interopRequireDefault(require("./table"));

var _text = _interopRequireDefault(require("./text"));

var _u = _interopRequireDefault(require("./u"));

var _url = _interopRequireDefault(require("./url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rules = {
  heading: _heading.default,
  nptable: _nptable.default,
  lheading: _lheading.default,
  hr: _hr.default,
  codeBlock: _codeBlock.default,
  fence: _fence.default,
  blockQuote: _blockQuote.default,
  list: _list.default,
  def: _def.default,
  table: _table.default,
  newline: _newline.default,
  paragraph: _paragraph.default,
  escape: _escape.default,
  autolink: _autolink.default,
  mailto: _mailto.default,
  url: _url.default,
  link: _link.default,
  image: _image.default,
  reflink: _reflink.default,
  refimage: _refimage.default,
  em: _em.default,
  strong: _strong.default,
  u: _u.default,
  del: _del.default,
  inlineCode: _inlineCode.default,
  br: _br.default,
  text: _text.default
};
let order = 0;

var _default = (0, _mapValues.default)(rules, value => {
  const rule = value;
  rule.order = order;
  order += 1;
  return rule;
});

exports.default = _default;