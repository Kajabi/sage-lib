import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Toast } from './Toast';

export default {
  title: 'Sage/Toast',
  component: Toast,
  args: {
    type: Toast.TYPES.DEFAULT,
    label: 'What this toast means',
  },
  argTypes: {
    ...selectArgs({
      type: Toast.TYPES
    })
  }
};

const Template = (args) => <Toast {...args} />;
export const Default = Template.bind({});

export const DangerToast = Template.bind({});
DangerToast.args = {
  icon: SageTokens.ICONS.DANGER_FILLED,
  type: Toast.TYPES.DANGER
};
