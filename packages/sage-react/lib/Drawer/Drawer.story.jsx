import React from 'react';
import { Drawer } from './Drawer';

export default {
  title: 'Sage/Drawer',
  component: Drawer,
  args: {}
};
const Template = (args) => <Drawer {...args} />;

export const Default = Template.bind({});
