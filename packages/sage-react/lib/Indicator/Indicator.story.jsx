import React from 'react';
import { Indicator } from './Indicator';

export default {
  title: 'Sage/Indicator',
  component: Indicator,
  args: {
    currentItem: 3,
    label: 'benzo',
    numItems: 6,
  }
};

const Template = (args) => <Indicator {...args} />;
export const Default = Template.bind({});
