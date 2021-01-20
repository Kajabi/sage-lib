import React from 'react';
import { CopyButton } from './CopyButton';

export default {
  title: 'Sage/CopyButton',
  component: CopyButton,
};
const Template = (args) => <CopyButton {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  children: 'https://www.example.com',
};
