import React from 'react';
import { FONT_FAMILY, FONT_H3_SIZE, FONT_H3_WEIGHT } from '../../../constants';

const style: React.CSSProperties = {
  marginBottom: '4px',
  fontFamily: FONT_FAMILY,
  fontSize: FONT_H3_SIZE,
  fontWeight: FONT_H3_WEIGHT,
};

export type TitleProps = {
  title: string;
};

export const Title = (props: TitleProps) => {
  return <div style={style}>{props.title}</div>;
};
