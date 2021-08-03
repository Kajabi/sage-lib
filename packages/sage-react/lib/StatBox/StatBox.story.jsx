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
  image: null,
  link: {
    value: 'View More',
    href: '#'
  },
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultWithSageColorLegendDot = Template.bind({});
DefaultWithSageColorLegendDot.args = {
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '38%',
  },
  data: '4,010',
  image: null,
  legendDotColor: StatBox.LEGEND_COLORS.PRIMARY,
  link: {
    value: 'View More',
    href: '#'
  },
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultWithSageCustomColorLegendDot = Template.bind({});
DefaultWithSageCustomColorLegendDot.args = {
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '42%',
  },
  data: '242',
  image: null,
  legendDotCustomColor: '#cf23a9',
  link: {
    value: 'View More',
    href: '#'
  },
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultRaised = Template.bind({});
DefaultRaised.args = {
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '76%',
  },
  data: '309',
  image: null,
  link: {
    value: 'View More',
    href: '#'
  },
  raised: true,
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const SimpleWithImage = Template.bind({});
SimpleWithImage.args = {
  change: null,
  data: '1,000',
  image: {
    alt: 'Example',
    src: 'https://via.placeholder.com/150'
  },
  link: null,
  title: 'Title'
};

export const NullView = Template.bind({});
NullView.args = {
  change: null,
  data: 'No insights to show',
  hasData: false,
  image: null,
  link: null,
  title: 'In Progress'
};
