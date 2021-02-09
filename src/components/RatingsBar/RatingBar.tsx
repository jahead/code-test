import React from 'react';
import { StarItem } from './StarItem';
import { RatingsCounterText } from './RatingsCounterText';

export type RatingsBarProps = {
  score?: number | null;
  onClick?: (value: number) => void;
};

const scoreThresholds = [1, 2, 3, 4, 5];
const noop = () => {};

export const RatingsBar = (props: RatingsBarProps) => {
  const score = props.score ? props.score + 0.009 : 0; // Because JS has a bad round function.
  const onClick = props.onClick ?? noop;
  return (
    <div style={{ display: 'flex', alignSelf: 'start' }}>
      {scoreThresholds.map(index => (
        <StarItem
          key={index.toString()}
          enabled={score >= index}
          onClick={() => onClick(index)}
        />
      ))}
      <RatingsCounterText score={props.score} />
    </div>
  );
};
