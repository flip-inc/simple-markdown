import React from 'react';
import slugify from 'slugify';

import { getHtmlTag, blockRegex, parseInline } from '../utils';

const heading = {
  match: blockRegex(/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n *)+\n/),
  parse(capture, parse, state) {
    return {
      level: capture[1].length,
      content: parseInline(parse, capture[2], state),
    };
  },
  react(node, output, state) {
    const Node = `h${node.level}`;

    const compiledOutput = output(node.content, state);
    let id = null;

    if (compiledOutput.length === 1 && typeof compiledOutput[0] === 'string') {
      id = slugify(compiledOutput[0], {
        lower: true,
        remove: /[^a-zA-Z0-9-]/g,
      });
    }

    return (
      <Node id={id} key={state.key}>
        {compiledOutput}
      </Node>
    );
  },
  html(node, output, state) {
    return getHtmlTag(`h${node.level}`, output(node.content, state));
  },
};

export default heading;
