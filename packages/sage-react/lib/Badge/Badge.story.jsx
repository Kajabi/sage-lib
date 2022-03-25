import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Badge } from './Badge';
import { Dot } from '../Dot';
import { BADGE_COLORS } from './configs';

export default {
  title: 'Sage/Badge',
  component: Badge,
  args: {
    color: BADGE_COLORS.DRAFT,
    isInteractive: false,
    value: "Label"
  },
  argTypes: {
    ...selectArgs({
      color: BADGE_COLORS
    })
  }
};

const Template = (args) => <Badge {...args} />;
export const Default = Template.bind({});

export const IndicatorBadge = Template.bind({});
IndicatorBadge.args = {
  dot: (
    <Dot />
  )
};

export const InteractiveBadge = Template.bind({});
InteractiveBadge.args = {
  color: BADGE_COLORS.INFO,
  isInteractive: true,
  dot: (
    <Dot />
  )
};
