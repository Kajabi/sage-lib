import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Sage/ProgressBar',
  component: ProgressBar,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Displays progress with a value.'
      },
    },
  },
  args: {
    label: 'Cloning product',
    percent: '44',
  },
  argTypes: {
    ...selectArgs({
      color: ProgressBar.COLORS,
      tooltipPosition: ProgressBar.TOOLTIP_POSITIONS,
    })
  }
};

const Template = (args) => <ProgressBar {...args} />;
export const Default = Template.bind({});
export const CustomColor = Template.bind({});
CustomColor.args = {
  color: ProgressBar.COLORS.PURPLE_300,
  backgroundColor: ProgressBar.COLORS.ORANGE_100,
  label: 'Cloning product',
  percent: '44',
};
