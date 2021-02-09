import React, { CSSProperties } from 'react';
import { LinkProps } from './LinkItem';

const style: CSSProperties = {
  alignSelf: 'flex-end',
  flex: '1',
  textAlign: 'end',
};

export type LinksProps = {
  links: LinkProps[];
};

export const Links = (props: LinksProps) => (
  <div className="footer-link-container" style={style}>
    {props.links.map(link => (
      <span className="footer-link" key={link.label}>
        <a style={{ color: 'white' }} href={link.href}>
          {link.label}
        </a>{' '}
      </span>
    ))}
  </div>
);
