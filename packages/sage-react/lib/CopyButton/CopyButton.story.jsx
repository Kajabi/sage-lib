import React from 'react';
import { CopyButton } from './CopyButton';

export default {
  title: 'Sage/CopyButton',
  component: CopyButton,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A small set of components to use in places where "copy" text is provided.'
      },
    },
  },
  args: {
    children: 'https://www.example.com',
    kjbElementId: 'exampleCopyButton',
  }
};

const Template = (args) => <CopyButton {...args} />;
export const Default = Template.bind({});

export const Borderless = Template.bind({});
Borderless.args = {
  borderless: true,
  children: 'example@example.com',
  kjbElementId: 'exampleBorderlessCopyButton',
};
