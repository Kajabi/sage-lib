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
      changeType: StatBox.TYPE,
    }),
  },
  args: {
    // As needed, provide overall story defaults here
    advanced: false,
    data: 65535,
    changeType: StatBox.TYPE.DEFAULT,
    changeValue: "54%",
    linkHref: "#",
    linkValue: "View More",
    timeframe: "in last 30 days",
    title: "In Progress",
    titleIcon: true
  }
};
const Template = (args) => <StatBox {...args} />;

// The default story; add more as needed by duplicating this line and adjusting as needed.
export const Default = Template.bind({});
