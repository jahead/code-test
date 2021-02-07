import React from 'react';
import { FONT_FAMILY, GOLDEN, GREEN } from '../../constants';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu-dash.svg';
import { Profile } from './Profile';

export const MainBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        fontFamily: FONT_FAMILY,
        color: 'white',
        width: '100%',
        minHeight: '48px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        background: `linear-gradient(0.25turn, ${GREEN}, ${GOLDEN})`,
      }}
    >
      <div
        style={{
          marginRight: 'auto',
          marginTop: 'auto',
          marginLeft: '12px',
          marginBottom: 'auto',
        }}
      >
        <img
          style={{ minHeight: '32px' }}
          src={logo}
          alt="The Company logo, circle with a tick in the center"
        />
      </div>
      <div
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}
      >
        <img
          style={{ minHeight: '28px' }}
          src={menu}
          alt="Button to access the menu"
        />
      </div>
      <Profile />
    </div>
  );
};
