import React from 'react';
import { StatBox } from './StatBox';

export default {
  title: 'Sage/StatBox',
  component: StatBox,
};
const Template = (args) => <StatBox {...args} />;

// The default story; add more as needed by duplicating this line and adjusting as needed.
export const Default = Template.bind({});
Default.args = {
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '38%',
  },
  data: '4,010',
  link: {
    value: 'View More',
    href: '#'
  },
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const NullView = Template.bind({});
NullView.args = {
  change: null,
  data: 'No insights to show',
  hasData: false,
  link: null,
  title: 'In Progress'
};
