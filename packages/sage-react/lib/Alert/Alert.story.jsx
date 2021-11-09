import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Link } from '../Link';
import { Alert } from './Alert';

export default {
  title: 'Sage/Alert',
  component: Alert,
  argTypes: {
    ...selectArgs({
      color: Alert.COLORS,
      icon: SageTokens.ICONS,
    }),
  },
  args: {
    actions: (
      <>
        <Link href="//example.com">See examples</Link>
        <Link href="//example.com">Do nothing!</Link>
      </>
    ),
    color: Alert.COLORS.APPROACHING,
    title: "You've used 80% of available pages",
    titleAddon: '(# of # pages)',
    description: 'Upgrade your plan to access unlimited landing pages.',
    dismissable: true,
  },
};

const Template = (args) => <Alert {...args} />;
export const Default = Template.bind({});
