import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { StatBox } from './StatBox';
import { Button } from '../Button';

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
  actions: (
    <Button
      color={Button.COLORS.PRIMARY}
      href="#"
      icon={SageTokens.ICONS.CARET_RIGHT}
      iconPosition={Button.ICON_POSITIONS.RIGHT}
      subtle={true}
    >
      View More
    </Button>
  ),
  data: '4,010',
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultWithSageColorLegendDot = Template.bind({});
DefaultWithSageColorLegendDot.args = {
  data: '4,010',
  legendDotColor: StatBox.LEGEND_COLORS.PRIMARY,
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultWithSageCustomColorLegendDot = Template.bind({});
DefaultWithSageCustomColorLegendDot.args = {
  data: '242',
  legendDotCustomColor: '#cf23a9',
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const DefaultRaised = Template.bind({});
DefaultRaised.args = {
  data: '309',
  raised: true,
  timeframe: 'in last 30 days',
  title: 'In Progress'
};

export const SimpleWithImage = Template.bind({});
SimpleWithImage.args = {
  data: '1,000',
  image: {
    alt: 'Example',
    src: 'https://via.placeholder.com/150'
  },
  title: 'Title'
};

export const SimpleWithIcon = Template.bind({});
SimpleWithIcon.args = {
  data: '1,000',
  icon: {
    cardColor: Icon.CARD_COLORS.PUBLISHED,
    name: Icon.ICONS.CHECK
  },
  title: 'Title'
};

export const NullView = Template.bind({});
NullView.args = {
  data: 'No insights to show',
  hasData: false,
  title: 'In Progress'
};
