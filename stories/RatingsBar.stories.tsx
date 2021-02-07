import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RatingsBar, RatingsBarProps } from '../src';

const meta: Meta = {
  title: 'Item/RatingsBar',
  component: RatingsBar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RatingsBarProps> = args => <RatingsBar {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  score: 0,
};
