import React from 'react';

export type LinkProps = {
  label: string;
  href: string;
};

const style = { color: 'white' };

export const LinkItems = ({ label, href }: LinkProps) => (
  <span className="footer-link" key={label}>
    <a style={style} href={href}>
      {label}
    </a>{' '}
  </span>
);
