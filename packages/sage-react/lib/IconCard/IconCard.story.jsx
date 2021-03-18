import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { IconCard } from './IconCard';

export default {
  title: 'Sage/IconCard',
  component: IconCard,
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
    size: IconCard.SIZES.MD
  }
};

const Template = (args) => <IconCard {...args} />;
export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    </>
  )
];
