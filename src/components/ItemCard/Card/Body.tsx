import React, { CSSProperties } from 'react';

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  flex: '3',
  padding: '12px 24px',
  paddingTop: '12px',
  paddingBottom: 'unset',
  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px',
};

export const ItemCardBody: React.FC = props => (
  <div style={style}>{props.children}</div>
);
