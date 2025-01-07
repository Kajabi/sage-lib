import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Icon } from '../Icon';
import { StatBox } from './StatBox';

export default {
  title: 'Sage/StatBox',
  component: StatBox,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Stat Boxes, for use in the CRM Dashboard, display important statistics for users to make informed decisions about their business.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      legendDotColor: StatBox.LEGEND_COLORS,
    }),
  }
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

export const DefaultWithSageColorLegendDot = Template.bind({});
DefaultWithSageColorLegendDot.args = {
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '38%',
  },
  data: '4,010',
  legendDotColor: StatBox.LEGEND_COLORS.PRIMARY,
  link: {
    value: 'View More',
    href: '#'
  },
  testId: 'exampleStatBox',
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
  legendDotCustomColor: '#cf23a9',
  link: {
    value: 'View More',
    href: '#'
  },
  testId: 'exampleDefaultWithColorLegend',
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
  link: {
    value: 'View More',
    href: '#'
  },
  raised: true,
  testId: 'exampleDefaultRaised',
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
  testId: 'exampleSimpleWithImage',
  title: 'Title'
};

export const SimpleWithIcon = Template.bind({});
SimpleWithIcon.args = {
  change: null,
  data: '1,000',
  icon: {
    cardColor: Icon.CARD_COLORS.PUBLISHED,
    name: Icon.ICONS.CHECK
  },
  testId: 'exampleSimpleWithIcon',
  title: 'Title'
};

export const NullView = Template.bind({});
NullView.args = {
  change: null,
  data: 'No insights to show',
  hasData: false,
  testId: 'exampleNullView',
  title: 'In Progress'
};
