import React from 'react';

import A from './triangle_1_3_1_1_1_1';
import B from './triangle_1_3_1_1_1_2';
import C from './triangle_1_3_1_1_1_3';

interface ContainerProps {
  style?: React.CSSProperties;
}

function Container({ style }: ContainerProps) {
  return (
    <>
      <g transform="translate(0 -2.16)   scale(0.5 0.5)">
        <A style={style} />
      </g>
      <g transform="translate(-2.5 2.16) scale(0.5 0.5)">
        <B style={style} />
      </g>
      <g transform="translate(2.5 2.16)  scale(0.5 0.5)">
        <C style={style} />
      </g>
    </>
  );
}

export default React.memo(Container);
