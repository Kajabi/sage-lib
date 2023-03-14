import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Hero } from './Hero';
import { Button } from '../Button';

export default {
  title: 'Sage/Hero',
  component: Hero,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: '' // TODO: Add component description
      },
    },
  },
  argTypes: {
    ...selectArgs({
      heroSize: Hero.Sizes,
    }),
  },
  args: {
    description: 'Get early access to new unreleased features and work along side our team by beta testing features before they go live.',
    image: {
      src: '//source.unsplash.com/random/800X400'
    },
    footerActions: (
      <>
        <Button
          className=""
          color="primary"
        >
          Get started
        </Button>
        <Button
          className=""
          color="primary"
          subtle={true}
        >
          Learn more
        </Button>
      </>
    ),
    title: 'My Title',
  }
};
const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
