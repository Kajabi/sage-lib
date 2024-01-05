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
