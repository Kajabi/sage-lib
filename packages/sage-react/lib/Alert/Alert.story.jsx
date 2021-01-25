import React from 'react';
import { Link } from '../Link';
import { Alert } from './Alert';

export default {
  title: 'Sage/Alert',
  component: Alert,
};
const Template = (args) => <Alert {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  actions: (
    <>
      <Link href="//example.com">See examples</Link>
      <Link href="//example.com">Do nothing!</Link>
    </>
  ),
  color: Alert.COLORS.SUCCESS,
  description: 'Testing a description',
  dismissable: true,
  raised: false,
  title: 'Title goes here',
};
