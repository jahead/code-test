import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header, ItemGrid, ItemCard, Footer, ItemCardProps } from '../src';

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

/**
 * exponential moving average using an N of 10
 */
const N = 10; // Number of samples we want to average over
const calcMovingAverage = (previousValue: number, currentValue: number) => {
  let newAvg = previousValue - previousValue / N;
  newAvg = newAvg + currentValue / N;
  return newAvg;
};

const ControlledItemCard = (props: Omit<ItemCardProps, 'onClick'>) => {
  const [rating, setRating] = React.useState(props.rating);
  return (
    <ItemCard
      {...props}
      rating={rating}
      onClick={(value, old) => {
        old === undefined || old === null
          ? setRating(value)
          : setRating(calcMovingAverage(old, value));
      }}
    />
  );
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
