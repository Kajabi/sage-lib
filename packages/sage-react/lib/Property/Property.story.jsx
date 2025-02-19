import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Property } from './Property';

export default {
  title: 'Sage/Property',
  component: Property,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Displays a metadata item for a resource.'
      },
    },
  },
  args: {
    icon: SageTokens.ICONS.USERS,
    children: 'Property',
    kjbElementId: 'exampleProperty',
  },
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS
    })
  }
};

const Template = (args) => <Property {...args} />;

export const Primary = Template.bind({});
Primary.args = { icon: 'users', children: 'Property' };
