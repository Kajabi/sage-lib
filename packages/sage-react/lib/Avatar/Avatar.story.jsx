import React from 'react';
import { Avatar } from './Avatar';

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
