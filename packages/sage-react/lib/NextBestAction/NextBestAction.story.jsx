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
    dismissable: true,
    image: {
      alt: 'This is the image alt',
      src: '//source.unsplash.com/random/272x272',
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

// Image on Right Example
export const ImageOnRight = (args) => (
  <NextBestAction
    {...args}
    image={{
      alt: args.image.alt,
      onRight: true,
      src: args.image.src,
    }}
  />
);
