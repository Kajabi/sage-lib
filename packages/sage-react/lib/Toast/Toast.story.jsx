import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Toast } from './Toast';

export default {
  title: 'Sage/Toast',
  component: Toast,
  decorators: [(Story) => <div style={{ marginTop: 50 }}>{ Story() }</div>],
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      type: Toast.TYPES,
    }),
  },
};

const Template = (args) => <Toast {...args} />;
export const Default = Template.bind({});
Default.args = {
  icon: SageTokens.ICONS.INFO_CIRCLE,
  isActive: true,
  title: 'Hello',
  description: 'How are you?',
  timeout: 3500,
  type: Toast.TYPES.DEFAULT
};

export const WithLink = Template.bind({});
WithLink.args = {
  icon: SageTokens.ICONS.INFO_CIRCLE,
  isActive: true,
  title: 'Congratulations on your success',
  link: { href: 'http://kajabi.com', text: 'Go to next step' },
  type: Toast.TYPES.LOADING,
  timeout: false
};
