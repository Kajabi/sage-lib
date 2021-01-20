import React from 'react';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

export default {
  title: 'Sage/Avatar',
  component: Avatar,
};
const Template = (args) => <Avatar {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  initials: 'QJ',
  color: Avatar.COLORS.SAGE,
};

export const Group = () => (
  <AvatarGroup
    items={[
      { initials: 'JC' },
      { color: 'purple', initials: 'PS' },
      { color: 'sage', initials: 'Q' },
      { color: 'orange', initials: 'KJ' },
    ]}
  />
);
