import React from 'react';
import { HelpLink } from './HelpLink';

export default {
  title: 'Sage/HelpLink',
  component: HelpLink,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: '' // TODO: Add component description
      },
    },
  },
  args: {
    labelIsVisible: false,
    children: 'Learn something'
  }
};
const Template = (args) => <HelpLink href="http://example.com" target="_blank" rel="noopener" {...args} />;

export const Default = Template.bind({});
