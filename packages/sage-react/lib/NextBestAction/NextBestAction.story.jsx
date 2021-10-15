import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { NextBestAction } from './NextBestAction';

export default {
  title: 'Sage/Next Best Action',
  component: NextBestAction,
  args: {
    cardColor: NextBestAction.COLORS.DRAFT,
    title: 'Offer an additional buy with Upsell',
  },
  argTypes: {
    ...selectArgs({
      cardColor: NextBestAction.COLORS,
    }),
  },
};
const Template = (args) => <NextBestAction {...args} />;
export const Default = Template.bind({});
