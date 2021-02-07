import React from 'react';
import {
  FONT_BODY_SIZE,
  FONT_BODY_WEIGHT,
  FONT_FAMILY,
  FONT_H2_SIZE,
  FONT_H3_WEIGHT,
  TONE_LIGHT,
} from '../../constants';

export type BreadCrumbsProps = {
  links: {
    label: string;
    href: string;
  }[];
};

export const BreadCrumbs = (props: BreadCrumbsProps) => {
  const previousLinks = props.links.slice(0, props.links.length - 1);
  const current = props.links[props.links.length - 1] || {
    label: 'home',
    href: '/',
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        backgroundColor: TONE_LIGHT,
      }}
    >
      <div style={{ maxWidth: '840px', margin: 'auto', width: '100%' }}>
        <ul className="bread-crumb-list" style={{ listStyle: 'none' }}>
          {previousLinks && previousLinks.length > 0 ? (
            <li
              className="bread-crumb-list-item"
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: FONT_BODY_SIZE,
                fontWeight: FONT_BODY_WEIGHT,
              }}
            >
              {previousLinks.map(link => (
                <span key={link.label}>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                    href={link.href}
                  >
                    {link.label}
                  </a>{' '}
                </span>
              ))}
            </li>
          ) : null}
          <li
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: FONT_H2_SIZE,
              fontWeight: FONT_H3_WEIGHT,
            }}
          >
            <span key={current.label}>{current.label}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
