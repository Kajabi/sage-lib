import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { NextBestAction } from './NextBestAction';
import { Button } from '../Button';

export default {
  title: 'Sage/Next Best Action',
  component: NextBestAction,
  args: {
    actions: (
      <Button
        color={Button.COLORS.PRIMARY}
      >
        Add an Upsell
      </Button>
    ),
    cardColor: NextBestAction.COLORS.DRAFT,
    description: (
      <>
        <p>
          Maximize your profit by adding an Upsell to your order flow.
          This section might wrap to two lines.
        </p>
        <p>Here is the second line. It has some text also.</p>
      </>
    ),
    dismissable: true,
    graphic: {
      element: (<img src="//source.unsplash.com/random/272x272" alt="" />)
    },
    onClickDismiss: () => { console.log('Add your own dismiss functionality here!') },
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

// Graphic on Right Example
export const GraphicOnRight = (args) => (
  <NextBestAction
    {...args}
    graphic={{
      element: args.graphic.element,
      onRight: true,
    }}
  />
);
