import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

export default {
  title: 'Sage/Tooltip',
  component: Tooltip,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Tooltips display helpful text when users hover over an element.'
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Story()}</div>],
  argTypes: {
    ...selectArgs({
      position: Tooltip.POSITIONS,
    }),
  },
  args: {
    children: (
      <Button>
        I inherit Mouse, Focus, and other events 👋
      </Button>
    ),
    content: 'Hi, I provide more context for this element!',
    position: Tooltip.POSITIONS.DEFAULT,
  }
};
const Template = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});

export const Static = () => (
  <Tooltip.Element content="Testing static tooltip" />
);

export const CustomClass = Template.bind({});
CustomClass.args = {
  children: <Button>Button</Button>,
  content: 'This content and sizing is styled with the applied custom class. Use at your own risk',
  position: Tooltip.POSITIONS.DEFAULT,
  tooltipCustomClass: 'custom-tooltip-class',
};

CustomClass.decorators = [
  (Story) => (
    <>
      <style>
        {`
          .custom-tooltip-class {
            color: #ff3e15;
            height: 200px;
            max-width: 800px;
            width: 400px;
          }
        `}
      </style>
      <Story />
    </>
  ),
];
