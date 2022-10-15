import React from 'react';
import { AvatarGroup } from './AvatarGroup';

export default {
  title: 'Sage/Avatar Group',
  component: AvatarGroup,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: '', // TODO: Add component description.
      },
    },
  },
  args: {
    items: [
      { initials: 'JC' },
      { color: 'purple', initials: 'PS' },
      { color: 'sage', initials: 'Q' },
      { color: 'orange', initials: 'KJ' },
    ]
  }
};

const Template = (args) => <AvatarGroup {...args} />;
export const Default = Template.bind({});
