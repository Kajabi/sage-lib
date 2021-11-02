import React from 'react';
import { Indicator } from './Indicator';

export default {
  title: 'Sage/Indicator',
  component: Indicator,
  args: {
    className: 'benzo',
    numItems: 3,
  }
};

const Template = (args) => <Indicator {...args} />;
export const Default = Template.bind({});
