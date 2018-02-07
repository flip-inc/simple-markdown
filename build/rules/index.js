'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _autolink = require('./autolink');

var _autolink2 = _interopRequireDefault(_autolink);

var _blockQuote = require('./blockQuote');

var _blockQuote2 = _interopRequireDefault(_blockQuote);

var _br = require('./br');

var _br2 = _interopRequireDefault(_br);

var _codeBlock = require('./codeBlock');

var _codeBlock2 = _interopRequireDefault(_codeBlock);

var _def = require('./def');

var _def2 = _interopRequireDefault(_def);

var _del = require('./del');

var _del2 = _interopRequireDefault(_del);

var _em = require('./em');

var _em2 = _interopRequireDefault(_em);

var _escape = require('./escape');

var _escape2 = _interopRequireDefault(_escape);

var _fence = require('./fence');

var _fence2 = _interopRequireDefault(_fence);

var _heading = require('./heading');

var _heading2 = _interopRequireDefault(_heading);

var _hr = require('./hr');

var _hr2 = _interopRequireDefault(_hr);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _inlineCode = require('./inlineCode');

var _inlineCode2 = _interopRequireDefault(_inlineCode);

var _lheading = require('./lheading');

var _lheading2 = _interopRequireDefault(_lheading);

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _mailto = require('./mailto');

var _mailto2 = _interopRequireDefault(_mailto);

var _newline = require('./newline');

var _newline2 = _interopRequireDefault(_newline);

var _nptable = require('./nptable');

var _nptable2 = _interopRequireDefault(_nptable);

var _paragraph = require('./paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _refimage = require('./refimage');

var _refimage2 = _interopRequireDefault(_refimage);

var _reflink = require('./reflink');

var _reflink2 = _interopRequireDefault(_reflink);

var _strong = require('./strong');

var _strong2 = _interopRequireDefault(_strong);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _u = require('./u');

var _u2 = _interopRequireDefault(_u);

var _url = require('./url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = {
  heading: _heading2.default,
  nptable: _nptable2.default,
  lheading: _lheading2.default,
  hr: _hr2.default,
  codeBlock: _codeBlock2.default,
  fence: _fence2.default,
  blockQuote: _blockQuote2.default,
  list: _list2.default,
  def: _def2.default,
  table: _table2.default,
  newline: _newline2.default,
  paragraph: _paragraph2.default,
  escape: _escape2.default,
  autolink: _autolink2.default,
  mailto: _mailto2.default,
  url: _url2.default,
  link: _link2.default,
  image: _image2.default,
  reflink: _reflink2.default,
  refimage: _refimage2.default,
  em: _em2.default,
  strong: _strong2.default,
  u: _u2.default,
  del: _del2.default,
  inlineCode: _inlineCode2.default,
  br: _br2.default,
  text: _text2.default
};

var order = 0;
exports.default = _lodash2.default.mapValues(rules, function (value) {
  var rule = value;
  rule.order = order;
  order += 1;
  return rule;
});