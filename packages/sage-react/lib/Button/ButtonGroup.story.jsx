import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { Link } from '../Link'

export default {
  title: 'Sage/Button Group',
  component: ButtonGroup,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: '', // TODO: Add component description.
      },
    },
  },
  argTypes: {
    ...selectArgs({
      align: ButtonGroup.ALIGN_OPTIONS,
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
    align: ButtonGroup.ALIGN_OPTIONS.NONE,
    gap: ButtonGroup.GAP_OPTIONS.SM,
  }
};
const Template = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});

export const withLink = () => {
  return (
    <>
      <ButtonGroup align="space-between">
        <Link href="#" removeUnderline style="secondary">Link</Link>
        <ButtonGroup gap="md">
          <Button color={Button.COLORS.PRIMARY}>Foo</Button>
          <Button color={Button.COLORS.SECONDARY}>Bar</Button>
        </ButtonGroup>
      </ButtonGroup>
    </>
  );
};
