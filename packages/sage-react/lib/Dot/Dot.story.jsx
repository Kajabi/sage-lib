import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Dot } from './Dot';

export default {
  title: 'Sage/Dot',
  component: Dot,
  args: {
    color: Dot.COLORS.SAGE,
    label: 'What this dot means',
  },
  argTypes: {
    ...selectArgs({
      color: Dot.COLORS
    })
  }
};

const Template = (args) => <Dot {...args} />;
export const Default = Template.bind({});
