import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Tag } from './Tag';

export default {
  title: 'Sage/Tag',
  component: Tag,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Tags show concise metadata in a compact format.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
    }),
  },
  args: {
    showDismiss: true,
    dismissAttributes: {
      onClick: () => {}
    },
    value: 'Label'
  }
};
const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
