import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer, FooterProps } from '../src';

const meta: Meta = {
  title: 'Dashboard/Footer',
  component: Footer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FooterProps> = args => <Footer {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  links: [
    { label: 'privacy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/tos' },
    { label: 'contact', href: '/contact' },
  ],
};
