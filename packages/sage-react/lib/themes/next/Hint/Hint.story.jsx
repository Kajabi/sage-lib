import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Hint } from './Hint';

export default {
  title: 'Sage/Hint',
  component: Hint,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
    }),
  },
  args: {
    content: 'Hello, world!',
    icon: SageTokens.ICONS.INFO_CIRCLE,
  }
};

const Template = (args) => <Hint {...args} />;
export const Default = Template.bind({});
