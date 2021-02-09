import React from 'react';
import GoldStar from '../../assets/single-star-gold.svg';
import GreyStar from '../../assets/single-star-grey.svg';

export type StarItemProps = {
  enabled?: boolean;
  onClick: () => void;
};

const style = {
  display: 'flex',
  flex: 1,
  margin: 'auto',
  marginBlockStart: '0',
  marginRight: '8px',
  width: '1em',
};

export const StarItem = (props: StarItemProps) => {
  const star = props.enabled ? GoldStar : GreyStar;
  const alt = props.enabled ? 'Gold Star' : 'Grey Star';
  const { onClick = () => {} } = props;
  return (
    <div onClick={() => onClick()} style={style}>
      <img src={star} alt={alt} />
    </div>
  );
};
