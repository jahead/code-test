import React, { CSSProperties } from 'react';

const style: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'space-evenly',
  justifyContent: 'flex-start',
};

export const ItemGrid: React.FC = props => (
  <div style={style}>{props.children}</div>
);
