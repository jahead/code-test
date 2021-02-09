import React from 'react';
import { FONT_BODY_WEIGHT, FONT_FAMILY, PILL_COLOUR_MASK } from '../constants';

const style: React.CSSProperties = {
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  fontFamily: FONT_FAMILY,
  fontSize: '8pt',
  fontWeight: FONT_BODY_WEIGHT,
  textAlign: 'center',
  textDecoration: 'none',
  display: 'flex',
  position: 'static',
  height: '12px',
  margin: '12px auto 12px 16px',
  cursor: 'default',
  borderRadius: '16px',
};

export type PillProps = {
  colour: 'green' | 'red';
  text: string;
};

export const Pill = (props: PillProps) => {
  const local = { ...style, backgroundColor: PILL_COLOUR_MASK[props.colour] };
  return <div style={local}>{props.text}</div>;
};
