import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ItemCard, ItemCardProps } from '../src';

const meta: Meta = {
  title: 'Item/Card',
  component: ItemCard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ItemCardProps> = args => (
  <div style={{ display: 'flex' }}>
    <ItemCard {...args} />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  title: 'App title 1',
  published: true,
  user: 'Netfront',
  rating: 3.2,
};
