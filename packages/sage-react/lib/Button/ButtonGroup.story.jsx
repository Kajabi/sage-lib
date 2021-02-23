import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Sage/Button Group',
  component: ButtonGroup,
  argTypes: {
    ...selectArgs({
      gap: ButtonGroup.GAP_OPTIONS,
    }),
  },
  args: {
    children: (
      <>
        <Button color={Button.COLORS.PRIMARY}>Foo</Button>
        <Button color={Button.COLORS.SECONDARY}>Bar</Button>
      </>
    ),
    gap: ButtonGroup.GAP_OPTIONS.SM,
  }
};
const Template = (args) => <ButtonGroup {...args} />;


// Each story then reuses that template
export const Default = Template.bind({});
