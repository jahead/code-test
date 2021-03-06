import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ItemCard, ItemGrid } from '../src';

type StoryProps = {
  data: {
    title: string;
    published: boolean;
    user: string;
    rating: number;
  }[];
};
const meta: Meta = {
  title: 'Item/Grid',
  component: ItemGrid,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<StoryProps> = args => (
  <div style={{ display: 'flex', margin: 'auto', maxWidth: '840px' }}>
    <ItemGrid>
      {args.data.map(item => (
        <ItemCard
          key={`${item.user}.${item.title}`}
          {...item}
          onClick={console.log}
        ></ItemCard>
      ))}
    </ItemGrid>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
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
};
