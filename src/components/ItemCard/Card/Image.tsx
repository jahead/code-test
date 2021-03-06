import React from 'react';

import ImagePlacement from '../../../assets/image-placement.svg';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center' /* align horizontal */,
  alignItems: 'center',
};

const imgStyle = { width: '50%', height: '50%' };

export type CardImageProps = {
  url?: string;
};

export const CardImage = (props: CardImageProps) => {
  return (
    <div style={containerStyle}>
      <img
        style={imgStyle}
        src={props.url ?? ImagePlacement}
        alt="Placement Picture"
      ></img>
    </div>
  );
};
