import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Icon } from './Icon';

export default {
  title: 'Sage/Icon',
  component: Icon,
  argTypes: {
    ...selectArgs({
      cardColor: Icon.CARD_COLORS,
      color: Icon.COLORS,
      icon: SageTokens.ICONS,
      size: Icon.SIZES
    }),
  },
  args: {
    cardColor: null,
    circular: false,
    color: Icon.COLORS.CHARCOAL,
    icon: Icon.ICONS.CHECK_CIRCLE,
    label: 'Click me',
    size: Icon.SIZES.MD
  }
};
const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
