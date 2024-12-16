import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Badge } from './Badge';
import { Dot } from '../Dot';
import { BADGE_COLORS } from './configs';

export default {
  title: 'Sage/Badge',
  component: Badge,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: '', // TODO: Add component description.
      },
    },
  },
  args: {
    color: BADGE_COLORS.DRAFT,
    isInteractive: false,
    value: 'Label'
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
  ),
  testId: 'indicatorBadge',
};

export const InteractiveBadge = Template.bind({});
InteractiveBadge.args = {
  color: BADGE_COLORS.INFO,
  isInteractive: true,
  dot: (
    <Dot />
  ),
  testId: 'interactiveBadge',
};

export const LargeBadge = Template.bind({});
LargeBadge.args = {
  color: BADGE_COLORS.DANGER,
  large: true,
  dot: (
    <Dot />
  ),
  testId: 'largeBadge',
};
