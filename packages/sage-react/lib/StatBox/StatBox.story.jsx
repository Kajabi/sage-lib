import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Icon } from '../Icon';
import { StatBox } from './StatBox';

export default {
  title: 'Sage/StatBox',
  component: StatBox,
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
  button: {
    attributes: {
      href: "#"
    },
    value: 'View More',
  },
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '38%',
  },
  data: '4,010',
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultWithSageColorLegendDot = Template.bind({});
DefaultWithSageColorLegendDot.args = {
  button: {
    attributes: {
      "data-js-copy-button": "testing"
    },
    value: 'View More',
  },
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '38%',
  },
  data: '4,010',
  legendDotColor: StatBox.LEGEND_COLORS.PRIMARY,
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultWithSageCustomColorLegendDot = Template.bind({});
DefaultWithSageCustomColorLegendDot.args = {
  button: {
    attributes: {
      href: "#"
    },
    value: 'View More',
  },
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '42%',
  },
  data: '242',
  legendDotCustomColor: '#cf23a9',
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultRaised = Template.bind({});
DefaultRaised.args = {
  button: {
    attributes: {
      href: "#"
    },
    value: 'View More',
  },
  change: {
    type: StatBox.TYPE.POSITIVE,
    value: '76%',
  },
  data: '309',
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
  title: 'Title'
};

export const NullView = Template.bind({});
NullView.args = {
  change: null,
  data: 'No insights to show',
  hasData: false,
  title: 'In Progress'
};
