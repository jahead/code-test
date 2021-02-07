import React from 'react';
import { FONT_BODY_SIZE, FONT_FAMILY, FONT_H3_WEIGHT } from '../../constants';

export type RatingsCounterTextProps = {
  score?: number | null;
};

export const RatingsCounterText = (props: RatingsCounterTextProps) => {
  const score = props.score?.toFixed(1) || 'No Review';
  return (
    <div
      style={{
        display: 'flex',
        alignSelf: 'center',
        height: '100%',
        minWidth: '24px',
        fontSize: FONT_BODY_SIZE,
        fontFamily: FONT_FAMILY,
        fontWeight: FONT_H3_WEIGHT,
      }}
    >
      {score}
    </div>
  );
};
