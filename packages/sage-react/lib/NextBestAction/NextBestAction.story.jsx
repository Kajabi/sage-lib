import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { NextBestAction } from './NextBestAction';

export default {
  title: 'Sage/Next Best Action',
  component: NextBestAction,
  args: {
    button: {
      style: NextBestAction.BUTTON_COLORS.PRIMARY,
      text: 'Add an Upsell',
    },
    cardColor: NextBestAction.COLORS.DRAFT,
    desc: 'Maximize your profit by adding an Upsell to your order flow. This section might wrap to two lines.',
    image: {
      alt: 'This is the image alt',
      src: 'https://pyxis.nymag.com/v1/imgs/993/469/02ca372a54c41c1913a15223280297100a-28-indiana-jones.rsquare.w1200.jpg',
    },
    title: 'Offer an additional buy with Upsell',
  },
  argTypes: {
    ...selectArgs({
      button: {
        style: NextBestAction.BUTTON_COLORS,
      },
      cardColor: NextBestAction.COLORS,
    }),
  },
};
const Template = (args) => <NextBestAction {...args} />;
export const Default = Template.bind({});
