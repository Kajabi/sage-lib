import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Divider } from './Divider';

export default {
  title: 'Sage/Divider',
  component: Divider,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: ''
      },
    },
  },
  args: {
    vertical: false,
  },
  argTypes: {
    ...selectArgs({
      offset: SageTokens.SPACERS
    })
  }
};

const Template = (args) => <Divider {...args} />;
export const Default = Template.bind({});
