import React, { CSSProperties } from 'react';
import {
  FONT_BODY_SIZE,
  FONT_BODY_WEIGHT,
  FONT_FAMILY,
} from '../../../constants';

const style: CSSProperties = {
  marginBottom: '4px',
  fontFamily: FONT_FAMILY,
  fontSize: FONT_BODY_SIZE,
  fontWeight: FONT_BODY_WEIGHT,
};

export type AuthorProps = {
  name: string;
};

export const Author = (props: AuthorProps) => {
  return <div style={style}>by {props.name}</div>;
};
