import React from 'react';
import { Indicator } from './Indicator';

export default {
  title: 'Sage/Indicator',
  component: Indicator,
  args: {
    currentItem: 3,
    label: 'Page',
    numItems: 6,
    showText: true,
  }
};

const Template = (args) => <Indicator {...args} />;
export const Default = Template.bind({});
