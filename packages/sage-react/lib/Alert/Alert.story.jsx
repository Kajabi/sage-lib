import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Link } from '../Link';
import { Alert } from './Alert';

export default {
  title: 'Sage/Alert',
  component: Alert,
  args: {
    actions: (
      <>
        <Link href="//example.com">See examples</Link>
        <Link href="//example.com">Do nothing!</Link>
      </>
    ),
    color: Alert.COLORS.SUCCESS,
    description: 'Testing a description',
    dismissable: true,
    title: 'Title goes here',
  },
  argTypes: {
    ...selectArgs({
      color: Alert.COLORS
    })
  }
};

const Template = (args) => <Alert {...args} />;
export const Default = Template.bind({});
