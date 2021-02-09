import React, { CSSProperties } from 'react';
import { FONT_FAMILY, TONE_DARK } from '../../constants';
import { Copyright } from './Copyright';
import { Links } from './Links';

export type FooterProps = {
  links: {
    label: string;
    href: string;
  }[];
};

const containerStyle: CSSProperties = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  padding: 0,
  margin: '0',
  fontFamily: FONT_FAMILY,
  fontSize: '8px',
  backgroundColor: TONE_DARK,
  color: 'white',
};

const innerStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '12px 24px',
};

export const Footer = (props: FooterProps) => {
  return (
    <div style={containerStyle}>
      <div style={innerStyle}>
        <Copyright />
        <Links links={props.links} />
      </div>
    </div>
  );
};
