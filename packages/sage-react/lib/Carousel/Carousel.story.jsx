import React from 'react';
import { Carousel } from './Carousel';
import { Button } from '../Button';
import { NextBestAction } from '../NextBestAction';

const carouselSlides = [...Array(6)].map((e, i) => (
  <NextBestAction
    actions={(
      <Button
        color={Button.COLORS.PRIMARY}
      >
        Add an Upsell
      </Button>
    )}
    cardColor="draft"
    description={(
      <p>Lorem ipsum dolor sit amet.</p>
    )}
    graphic={{
      element: (<img src="https://sage-design-system.kajabi.com/assets/next_best_action_graphic-7ee408e5df4afae92cdc499aae59083f5d3ff9aef3c2e8b6e2ea761784deca79.png" alt="" />)
    }}
    // Since there is nothing unique about these slides, using
    // the index as the key is fine.
    // eslint-disable-next-line react/no-array-index-key
    key={i}
    title="Hello, world"
  />
));

export default {
  title: 'Sage/Carousel',
  component: Carousel,
  args: {
    children: (
      <>
        {carouselSlides}
      </>
    ),
    options: {
      arrowKeys: true,
      fixedWidth: 544,
      gutter: 24,
      loop: false,
      mouseDrag: true,
    },
  },
};

const Template = (args) => <Carousel {...args} />;
export const Default = Template.bind({});
