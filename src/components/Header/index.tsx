import React from 'react';
import { BreadCrumbs, BreadCrumbsProps } from './Breadcrumbs';
import { MainBar } from './MainBar';
export type HeaderProps = BreadCrumbsProps;

export const Header = (props: HeaderProps) => {
  return (
    <div
      style={{
        position: 'sticky',
        top: '0',
        width: '100%',
        padding: 0,
        margin: '0',
      }}
    >
      <MainBar></MainBar>
      <BreadCrumbs links={props.links}></BreadCrumbs>
    </div>
  );
};
