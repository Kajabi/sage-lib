import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { StatBox } from './StatBox';

export default {
  title: 'Sage/StatBox',
  component: StatBox,
  argTypes: {
    // As needed, use this for elaboration of token properties
    // such as shown below for icons
    ...selectArgs({
      // icon: SageTokens.ICONS,
    }),
  },
  args: {
    // As needed, provide overall story defaults here
    children: (
      <p>Sample Component children showing up!</p>
    ),
  }
};
const Template = (args) => <StatBox {...args} />;

// The default story; add more as needed by duplicating this line and adjusting as needed.
export const Default = Template.bind({});
