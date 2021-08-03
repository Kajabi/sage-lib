import React from 'react';
import { Choice } from './Choice';

export default {
  title: 'Sage/Choice',
  component: Choice,
  argTypes: {},
  args: {},
};

const Template = (args) => (
  <>
    <Choice {...args} />
    <Choice {...args} />
  </>
);
export const Default = Template.bind({});
