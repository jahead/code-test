import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header, ItemGrid, Footer } from '../src';
import { ControlledItemCard } from './containers/ControlledItemCard';

import './assets/index.css';

const args = {
  data: [
    {
      title: 'App title 1',
      published: true,
      user: 'Netfront',
      rating: 3.2,
    },
    {
      title: 'App title 2',
      published: true,
      user: 'Netfront',
      rating: 4.8,
    },
    {
      title: 'App title 3',
      published: false,
      user: 'Netfront',
      rating: 4.0,
    },
    {
      title: 'App title 4',
      published: true,
      user: 'Netfront',
      rating: 3.8,
    },
    {
      title: 'App title 5',
      published: true,
      user: 'Netfront',
      rating: 3.8,
    },
    {
      title: 'App title 6',
      published: true,
      user: 'Netfront',
      rating: null,
    },
    {
      title: 'App title 7',
      published: true,
      user: 'Netfront',
      rating: 4.0,
    },
    {
      title: 'App title 8',
      published: true,
      user: 'Netfront',
      rating: 3.8,
    },
  ],
  navLinks: [
    { label: 'Dashboard', href: '/Dashboard' },
    { label: 'My apps', href: '/MyApps' },
    { label: 'apps', href: '/MyApps' },
  ],
  footerLinks: [
    { label: 'privacy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/tos' },
    { label: 'contact', href: '/contact' },
  ],
};

const App = () => {
  return (
    <div>
      <Header links={args.navLinks} />
      <div
        style={{
          display: 'flex',
          margin: 'auto',
          maxWidth: '840px',
          marginTop: '12px',
        }}
      >
        <ItemGrid>
          {args.data.map(item => (
            <ControlledItemCard key={`${item.user}.${item.title}`} {...item} />
          ))}
        </ItemGrid>
      </div>
      <Footer links={args.footerLinks} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
