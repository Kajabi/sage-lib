import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Sage/ProgressBar',
  component: ProgressBar,
  args: {
    color: ProgressBar.COLORS.PRIMARY,
    label: 'What this dot means',
  },
  argTypes: {
    ...selectArgs({
      color: ProgressBar.COLORS
    })
  }
};

const Template = (args) => <ProgressBar {...args} />;
export const Default = Template.bind({});
