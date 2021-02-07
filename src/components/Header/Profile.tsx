import React from 'react';
import profile from '../../assets/profile.svg';

export const Profile = () => {
  return (
    <div
      style={{
        marginTop: 'auto',
        marginLeft: '12px',
        marginRight: '12px',
        marginBottom: 'auto',
      }}
    >
      <img
        style={{ minHeight: '28px' }}
        src={profile}
        alt="Button to access the menu"
      />
    </div>
  );
};
