import React from 'react';

export const ItemGrid: React.FC = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-evenly',
        justifyContent: 'flex-start',
      }}
    >
      {props.children}
    </div>
  );
};
