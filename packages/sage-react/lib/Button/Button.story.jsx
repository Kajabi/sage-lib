import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Button } from './Button';

export default {
  title: 'Sage/Button',
  component: Button,
  argTypes: {
    ...selectArgs({
      color: Button.COLORS,
      icon: SageTokens.ICONS,
      iconPosition: Button.ICON_POSITIONS,
    }),
  },
  args: {
    children: 'Test me',
    color: Button.COLORS.PRIMARY,
    iconOnly: false,
    iconPosition: Button.ICON_POSITIONS.LEFT,
  }
};
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
