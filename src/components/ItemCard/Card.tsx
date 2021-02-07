import React from 'react';
import {
  FONT_BODY_SIZE,
  FONT_BODY_WEIGHT,
  FONT_FAMILY,
  FONT_H3_SIZE,
  FONT_H3_WEIGHT,
  TONE_LIGHT,
} from '../../constants';
import { Pill } from '../Pill';
import { RatingsBar } from '../RatingsBar';
import ImagePlacement from '../../assets/image-placement.svg';

const PublishPill = (props: { published: boolean }) => {
  return props?.published ? (
    <Pill colour={'green'} text="Published" />
  ) : (
    <Pill colour={'red'} text="Unpublished" />
  );
};

const Title = (props: { title: string }) => {
  return (
    <div
      style={{
        marginBottom: '4px',
        fontFamily: FONT_FAMILY,
        fontSize: FONT_H3_SIZE,
        fontWeight: FONT_H3_WEIGHT,
      }}
    >
      {props.title}
    </div>
  );
};

const Author = (props: { name: string }) => {
  return (
    <div
      style={{
        marginBottom: '4px',
        fontFamily: FONT_FAMILY,
        fontSize: FONT_BODY_SIZE,
        fontWeight: FONT_BODY_WEIGHT,
      }}
    >
      by {props.name}
    </div>
  );
};

const ItemCardHeader: React.FC = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: '5' }}>
      {props.children}
    </div>
  );
};

const ItemCardBody: React.FC = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: '3',
        padding: '12px 24px',
        paddingTop: '12px',
        paddingBottom: 'unset',
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
      }}
    >
      {props.children}
    </div>
  );
};

const CardImage = (_: { url: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center' /* align horizontal */,
        alignItems: 'center' /* align vertical */,
      }}
    >
      <img
        style={{ width: '50%', height: '50%' }}
        src={ImagePlacement}
        alt="Placement Picture"
      ></img>
    </div>
  );
};

export type ItemCardProps = {
  title: string;
  published: boolean;
  user: string;
  rating?: number | null;
  onClick: (value: number, oldRating?: number | null) => void;
};

export const ItemCard = (props: ItemCardProps) => {
  return (
    <div
      style={{
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
      }}
    >
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
