import React from 'react';
import { Icon } from './Icon';

export default {
  title: 'Sage/Icon',
  component: Icon,
};
const Template = (args) => <Icon {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  color: Icon.COLORS.CHARCOAL,
  icon: Icon.ICONS.CHECK_CIRCLE,
  label: 'Click me',
  size: Icon.SIZES.MD
};
