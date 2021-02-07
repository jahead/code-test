import React from 'react';
import { StarItem } from './StarItem';
import { RatingsCounterText } from './RatingsCounterText';

export type RatingsBarProps = {
  score?: number | null;
  onClick?: (value: number) => void;
};

export const RatingsBar = (props: RatingsBarProps) => {
  const score = props.score ? props.score + 0.009 : 0; // Because JS has a bad round function.
  return (
    <div style={{ display: 'flex', alignSelf: 'start' }}>
      <StarItem
        enabled={score >= 1}
        onClick={() => (props.onClick ? props.onClick(1) : null)}
      ></StarItem>
      <StarItem
        enabled={score >= 2}
        onClick={() => (props.onClick ? props.onClick(2) : null)}
      ></StarItem>
      <StarItem
        enabled={score >= 3}
        onClick={() => (props.onClick ? props.onClick(3) : null)}
      ></StarItem>
      <StarItem
        enabled={score >= 4}
        onClick={() => (props.onClick ? props.onClick(4) : null)}
      ></StarItem>
      <StarItem
        enabled={score >= 5}
        onClick={() => (props.onClick ? props.onClick(5) : null)}
      ></StarItem>
      <RatingsCounterText score={props.score} />
    </div>
  );
};
