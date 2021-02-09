import React, { CSSProperties } from 'react';

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flex: '5',
};

export const ItemCardHeader: React.FC = props => {
  return <div style={style}>{props.children}</div>;
};
