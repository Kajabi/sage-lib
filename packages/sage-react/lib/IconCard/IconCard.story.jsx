import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { IconCard } from './IconCard';

export default {
  title: 'Sage/IconCard',
  component: IconCard,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A simple component that allows an icon to be rendered on a field with a unified color scheme applied.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      color: IconCard.COLORS,
      icon: SageTokens.ICONS,
      size: IconCard.SIZES
    }),
  },
  args: {
    color: IconCard.COLORS.DRAFT,
    icon: IconCard.ICONS.CHECK_CIRCLE,
    round: false,
    size: IconCard.SIZES.MD
  }
};

const Template = (args) => <IconCard {...args} />;
export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {Story()}
      </div>
    </>
  )
];
