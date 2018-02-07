"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseInline = exports.parseInline = function parseInline(parse, content, state) {
  var isCurrentlyInline = state.inline || false;
  state.inline = true;
  var result = parse(content, state);
  state.inline = isCurrentlyInline;
  return result;
};

var parseBlock = exports.parseBlock = function parseBlock(parse, content, state) {
  var isCurrentlyInline = state.inline || false;
  state.inline = false;
  var result = parse(content + "\n\n", state);
  state.inline = isCurrentlyInline;
  return result;
};

var parseCaptureInline = exports.parseCaptureInline = function parseCaptureInline(capture, parse, state) {
  return {
    content: parseInline(parse, capture[1], state)
  };
};

var ignoreCapture = exports.ignoreCapture = function ignoreCapture() {};