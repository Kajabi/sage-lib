import React from 'react';
import { Carousel } from './Carousel';
import { Button } from '../Button';
import { NextBestAction } from '../NextBestAction';

export default {
  title: 'Sage/Carousel',
  component: Carousel,
  args: {
    children: (
      <>
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
            element: (<img src="//source.unsplash.com/random/272x272" alt="" />)
          }}
          title="Hello, world"
        />
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
            element: (<img src="//source.unsplash.com/random/272x272" alt="" />)
          }}
          title="Hello, world"
        />
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
            element: (<img src="//source.unsplash.com/random/272x272" alt="" />)
          }}
          title="Hello, world"
        />
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
            element: (<img src="//source.unsplash.com/random/272x272" alt="" />)
          }}
          title="Hello, world"
        />
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
            element: (<img src="//source.unsplash.com/random/272x272" alt="" />)
          }}
          title="Hello, world"
        />
      </>
    ),
    options: {
      arrowKeys: true,
      fixedWidth: 544,
      gutter: 24,
      loop: false,
    },
  },
};
const Template = (args) => <Carousel {...args} />;
export const Default = Template.bind({});
