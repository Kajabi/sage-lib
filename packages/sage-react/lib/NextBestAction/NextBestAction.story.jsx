import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { NextBestAction } from './NextBestAction';

export default {
  title: 'Sage/Next Best Action',
  component: NextBestAction,
  args: {
    cardColor: NextBestAction.COLORS.DRAFT,
    children: (
      <p>Sample Component children showing up!</p>
    ),
  },
  argTypes: {
    ...selectArgs({
      cardColor: NextBestAction.COLORS,
    }),
  },
};
const Template = (args) => <NextBestAction {...args} />;
export const Default = Template.bind({});
