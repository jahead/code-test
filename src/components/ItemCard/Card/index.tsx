import React, { CSSProperties } from 'react';
import { TONE_LIGHT } from '../../../constants';
import { RatingsBar } from '../../RatingsBar';
import { Author } from './Author';
import { ItemCardBody } from './Body';
import { ItemCardHeader } from './Header';
import { CardImage } from './Image';
import { PublishPill } from './PublishPill';
import { Title } from './Title';

export type ItemCardProps = {
  title: string;
  published: boolean;
  user: string;
  rating?: number | null;
  onClick: (value: number, oldRating?: number | null) => void;
};

const style: CSSProperties = {
  border: `2px ${TONE_LIGHT} solid`,
  borderRadius: '18px',
  display: 'flex',
  backgroundColor: TONE_LIGHT,
  flexDirection: 'column',
  maxWidth: '210px',
  minHeight: '240px',
  maxHeight: '320px',
  marginBottom: '24px',
  marginLeft: '24px',
  flex: '1 1 21%',
  cursor: 'pointer',
};

export const ItemCard = (props: ItemCardProps) => {
  return (
    <div style={style}>
      <ItemCardHeader>
        <PublishPill published={props.published} />
        <CardImage url="" />
      </ItemCardHeader>
      <ItemCardBody>
        <Title title={props.title} />
        <Author name={props.user} />
        <RatingsBar
          score={props.rating}
          onClick={number => props.onClick(number, props.rating)}
        />
      </ItemCardBody>
    </div>
  );
};
