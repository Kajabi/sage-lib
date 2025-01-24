import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Hint } from './Hint';

export default {
  title: 'Sage/Hint',
  component: Hint,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A hint is used to display non-critical informative text.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
    }),
  },
  args: {
    content: 'Hello, world!',
    icon: SageTokens.ICONS.INFO_CIRCLE,
    kjbElementId: 'exampleHint',
  }
};

const Template = (args) => <Hint {...args} />;
export const Default = Template.bind({});
