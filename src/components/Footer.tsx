import React from 'react';
import { FONT_FAMILY, TONE_DARK } from '../constants';

export type FooterProps = {
  links: {
    label: string;
    href: string;
  }[];
};

export const Footer = (props: FooterProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        padding: 0,
        margin: '0',
        fontFamily: FONT_FAMILY,
        fontSize: '8px',
        backgroundColor: TONE_DARK,
        color: 'white',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '12px 24px' }}>
        <div
          style={{
            alignSelf: 'flex-start',
            flex: '1 1 400px',
            marginRight: 'auto',
          }}
        >
          2019 <span>&#169;</span> NETFRONT
        </div>
        <div
          className="footer-link-container"
          style={{ alignSelf: 'flex-end', flex: '1', textAlign: 'end' }}
        >
          {props.links.map(link => (
            <span className="footer-link" key={link.label}>
              <a style={{ color: 'white' }} href={link.href}>
                {link.label}
              </a>{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
