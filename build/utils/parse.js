"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignoreCapture = exports.parseCaptureInline = exports.parseBlock = exports.parseInline = void 0;

const parseInline = (parse, content, state) => {
  const isCurrentlyInline = state.inline || false;
  state.inline = true;
  const result = parse(content, state);
  state.inline = isCurrentlyInline;
  return result;
};

exports.parseInline = parseInline;

const parseBlock = (parse, content, state) => {
  const isCurrentlyInline = state.inline || false;
  state.inline = false;
  const result = parse("".concat(content, "\n\n"), state);
  state.inline = isCurrentlyInline;
  return result;
};

exports.parseBlock = parseBlock;

const parseCaptureInline = (capture, parse, state) => ({
  content: parseInline(parse, capture[1], state)
});

exports.parseCaptureInline = parseCaptureInline;

const ignoreCapture = () => {};

exports.ignoreCapture = ignoreCapture;