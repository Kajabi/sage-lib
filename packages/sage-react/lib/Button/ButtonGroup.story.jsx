import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { Link } from '../Link';

export default {
  title: 'Sage/Button Group',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: 'Button Group allows buttons to be positioned in various ways.',
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

export const WithLink = () => (
  <ButtonGroup align="space-between">
    <Link href="http://example.com" removeUnderline style={Link.COLORS.SECONDARY}>Link</Link>
    <ButtonGroup gap="md">
      <Button color={Button.COLORS.PRIMARY} testId="examplePrimaryButton">Foo</Button>
      <Button color={Button.COLORS.SECONDARY} testId="exampleSecondaryButton">Bar</Button>
    </ButtonGroup>
  </ButtonGroup>
);
