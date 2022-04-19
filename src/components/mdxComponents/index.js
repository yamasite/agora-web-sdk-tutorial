import * as React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import BasicFlow from './flowChart';
import learningPath from './learningPath';
import quiz01 from './quiz01';
import quiz02 from './quiz02';
import quiz03 from './quiz03';
import quiz04 from './quiz04';
import quiz05 from './quiz05';



const StyledPre = styled('pre')`
  padding: 16px;
  background: ${(props) => props.theme.colors.preFormattedText};
`;

const appendString = (children) => {
  if (Array.isArray(children)) {
    return children.reduce((acc, current) => {
      if (typeof current === 'string') {
        return acc.concat(current);
      } else if (typeof current === 'object') {
        return acc.concat(current.props.children);
      } else {
        return acc;
      }
    }, '');
  } else {
    return children;
  }
};

export default {
  h1: (props) => (
    <h1
      className="heading1"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="heading2"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="heading3"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="heading4"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className="heading5"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h6: (props) => (
    <h6
      className="heading6"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  p: (props) => <p className="paragraph" {...props} />,
  pre: (props) => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  flow: BasicFlow,
  learning: learningPath,
  Newquiz01: quiz01,
  Newquiz02: quiz02,
  Newquiz03: quiz03,
  Newquiz04: quiz04,
  Newquiz05: quiz05,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
