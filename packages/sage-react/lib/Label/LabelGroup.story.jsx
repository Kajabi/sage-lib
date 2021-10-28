import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Label } from './Label';
import { LabelGroup } from './LabelGroup';

export default {
  title: 'Sage/Label Group',
  component: LabelGroup,
  argTypes: {
    ...selectArgs({
      align: LabelGroup.ALIGN_OPTIONS,
      gap: LabelGroup.GAP_OPTIONS,
    })
  },
  args: {
    children: (
      <>
        <Label color={Label.COLORS.INFO} value="Hello World" />
        <Label color={Label.COLORS.SUCCESS} value="Hello World" />
      </>
    ),
    align: LabelGroup.ALIGN_OPTIONS.NONE,
    gap: LabelGroup.GAP_OPTIONS.SM,
  }
};
const Template = (args) => <LabelGroup {...args} />;

export const Default = Template.bind({});
