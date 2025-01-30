import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Toast } from './Toast';
import { Button } from '../Button';

export default {
  title: 'Sage/Toast',
  component: Toast,
  decorators: [(Story) => <div style={{ marginTop: 50 }}>{ Story() }</div>],
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      type: Toast.TYPES,
    }),
  },
};

const Template = (args) => {
  const [isActive, setActive] = useState(false);
  const invokeToast = () => {
    setActive(!isActive);
  };

  const handleDismiss = () => {
    setActive(false);
  };

  return (
    <>
      <Button onClick={invokeToast}>{`Toggle "${args.title}" Toast`}</Button>
      <Toast {...args} isActive={isActive} onDismiss={handleDismiss} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  icon: SageTokens.ICONS.INFO_CIRCLE,
  title: 'Hello',
  description: 'How are you?',
  kjbElementId: 'exampleToast',
  timeout: 3500,
  type: Toast.TYPES.DEFAULT
};

export const WithLink = Template.bind({});
WithLink.args = {
  icon: SageTokens.ICONS.INFO_CIRCLE,
  title: 'Congratulations on your success',
  link: { href: 'http://kajabi.com', text: 'Go to next step' },
  kjbElementId: 'exampleWithLink',
  type: Toast.TYPES.LOADING,
  timeout: false
};
