import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { Label } from './Label';

export default {
  title: 'Sage/Label',
  component: Label,
  argTypes: {
    ...selectArgs({
      color: Label.COLORS,
      icon: SageTokens.ICONS,
      interactiveType: Label.INTERACTIVE_TYPES,
      style: Label.STYLES,
    }),
  },
  args: {
    color: Label.COLORS.DRAFT,
    icon: SageTokens.ICONS.NONE,
    style: Label.STYLES.DEFAULT,
    value: 'Hello world'
  }
};
const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});

export const CustomIconColor = Template.bind({});
CustomIconColor.args = {
  icon: SageTokens.ICONS.ADD,
  customIconColor: '#ff33ff',
};

export const InteractiveDefault = Template.bind({});
InteractiveDefault.args = {
  interactiveType: Label.INTERACTIVE_TYPES.DEFAULT
};

export const InteractiveDropdownTreatment = Template.bind({});
InteractiveDropdownTreatment.args = {
  interactiveType: Label.INTERACTIVE_TYPES.DROPDOWN
};

export const InteractiveWithSecondaryButton = Template.bind({});
InteractiveWithSecondaryButton.args = {
  interactiveType: Label.INTERACTIVE_TYPES.SECONDARY_BUTTON,
  secondaryButton: (
    <Button
      color={Button.COLORS.SECONDARY}
      subtle={true}
      icon={SageTokens.ICONS.REMOVE}
      iconOnly={true}
    >
      Cancel
    </Button>
  )
};
