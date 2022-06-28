import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Badge } from './Badge';
import { Dot } from '../Dot';

export default {
  title: 'Sage/Badge',
  component: Badge,
  args: {
    color: Badge.COLORS.DRAFT,
    isInteractive: null,
    value: 'Label'
  },
  argTypes: {
    ...selectArgs({
      color: Badge.COLORS
    })
  }
};

const Template = (args) => <Badge {...args} />;
export const Default = Template.bind({});

export const IndicatorBadge = Template.bind({});
IndicatorBadge.args = {
  dot: (
    <Dot color={Dot.COLORS.CHARCOAL} />
  ),
};

export const InteractiveBadge = Template.bind({});
InteractiveBadge.args = {
  color: Badge.COLORS.INFO,
  isInteractive: true,
  dot: (
    <Dot color={Dot.COLORS.PRIMARY} />
  ),
  isDropdown: true,
};
