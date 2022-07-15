import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

export default {
  title: 'Sage/Tooltip',
  component: Tooltip,
  decorators: [(Story) => <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Story /></div>],
  argTypes: {
    ...selectArgs({
      position: Tooltip.POSITIONS,
      size: Tooltip.SIZES,
      theme: Tooltip.THEMES
    }),
  },
  args: {
    children: (
      <Button>
        I inherit Mouse &amp; Focus events 👋
      </Button>
    ),
    content: 'Hi, I provide more context for this element!',
    position: Tooltip.POSITIONS.DEFAULT,
    size: Tooltip.SIZES.DEFAULT,
    theme: Tooltip.THEMES.DEFAULT,
  }
};
const Template = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});

export const Static = () => (
  <Tooltip.Element content="Testing static tooltip" />
);
