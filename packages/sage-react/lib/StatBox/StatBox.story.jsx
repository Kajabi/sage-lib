import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Popover } from '../Popover';
import { StatBox } from './StatBox';

export default {
  title: 'Sage/StatBox',
  component: StatBox,
  argTypes: {
    ...selectArgs({
      legendDotColor: StatBox.LEGEND_COLORS,
    }),
  },
  args: {
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
    data: '1337',
    label: (
      <Label
        color={Label.COLORS.PUBLISHED}
        value='1 new'
      />
    ),
    legendDotColor: StatBox.LEGEND_COLORS.PRIMARY,
    popover: (
      <Popover
        icon={SageTokens.ICONS.QUESTION_CIRCLE}
        iconOnly={true}
        title='Example Popover Title'
      >
        Popover content
      </Popover>
    ),
    timeframe: 'in last 30 days',
    title: 'In Progress',
  }
};
const Template = (args) => <StatBox {...args} />;

// The default story; add more as needed by duplicating this line and adjusting as needed.
export const Default = Template.bind({});

export const DefaultWithSageCustomColorLegendDot = Template.bind({});
DefaultWithSageCustomColorLegendDot.args = {
  legendDotCustomColor: '#cf23a9',
};

export const DefaultRaised = Template.bind({});
DefaultRaised.args = {
  raised: true,
};

export const SimpleWithImage = Template.bind({});
SimpleWithImage.args = {
  actions: null,
  image: {
    alt: 'Example',
    src: 'https://via.placeholder.com/150'
  },
  label: null,
  legendDotColor: null,
  popover: null,
  timeframe: null,
  title: 'Title'
};

export const SimpleWithIcon = Template.bind({});
SimpleWithIcon.args = {
  actions: null,
  icon: {
    cardColor: Icon.CARD_COLORS.PUBLISHED,
    name: Icon.ICONS.CHECK
  },
  label: null,
  legendDotColor: null,
  popover: null,
  title: 'Title',
  timeframe: null,
};

export const NullView = Template.bind({});
NullView.args = {
  actions: null,
  data: 'No insights to show',
  hasData: false,
  label: null,
  legendDotColor: null,
  popover: null,
  timeframe: null,
  title: 'Completed'
};
