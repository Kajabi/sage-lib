import React from 'react';
import { CopyButton } from './CopyButton';

export default {
  title: 'Sage/CopyButton',
  component: CopyButton,
  args: {
    children: 'https://www.example.com',
  }
};

const Template = (args) => <CopyButton {...args} />;
export const Default = Template.bind({});

export const Borderless = Template.bind({});
Borderless.args = {
  borderless: true,
  children: 'example@example.com',
};
