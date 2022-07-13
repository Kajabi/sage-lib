import React from 'react';
import { Indicator } from './Indicator';

export default {
  title: 'Sage/Indicator',
  component: Indicator,
  args: {
    currentItem: 3,
    label: 'Page',
    numItems: 6,
    showText: false,
  }
};

const Template = (args) => <Indicator {...args} />;
export const Default = Template.bind({});

export const ShowText = Template.bind({});
ShowText.args = {
  showText: true,
};
