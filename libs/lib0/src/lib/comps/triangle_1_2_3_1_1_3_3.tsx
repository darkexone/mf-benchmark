import React from 'react';

interface TriangleProps {
  style?: React.CSSProperties;
}

function Triangle({ style }: TriangleProps) {
  return (
    <>
      <polygon points="-5,4.33 0,-4.33 5,4.33" style={style} />
    </>
  );
}

export default React.memo(Triangle);
