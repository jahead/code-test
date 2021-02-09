import 'react-app-polyfill/ie11';
import * as React from 'react';
import { ItemCard, ItemCardProps } from '../../src';

/**
 * exponential moving average using an N of 10
 */
const N = 10; // Number of samples we want to average over
const calcMovingAverage = (previousValue: number, currentValue: number) => {
  let newAvg = previousValue - previousValue / N;
  newAvg = newAvg + currentValue / N;
  return newAvg;
};

export const ControlledItemCard = (props: Omit<ItemCardProps, 'onClick'>) => {
  const [rating, setRating] = React.useState(props.rating);
  return (
    <ItemCard
      {...props}
      rating={rating}
      onClick={(value, old) => {
        old === undefined || old === null
          ? setRating(value)
          : setRating(calcMovingAverage(old, value));
      }}
    />
  );
};
