import React from 'react';
import { Hint } from './Hint';

export default {
  title: 'Sage/Hint',
  component: Hint,
  args: {
    text: 'Hello, world!'
  }
};

const Template = (args) => <Hint {...args} />;
export const Default = Template.bind({});
