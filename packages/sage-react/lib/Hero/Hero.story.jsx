import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Hero } from './Hero';
import { Button } from '../Button';

import imageFile from '../../public/HeroContainerPlaceholder.png';

export default {
  title: 'Sage/Hero',
  component: Hero,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'A Hero can be used to call call attention to new features or content. The hero is flexible in size and can contain text, illustrations, full bleed images, and a full bleed video thumbnail.'
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

export const Small = Template.bind({});
Small.args = {
  title: 'Be the first to try what Kajabi is building',
  description: 'Get early access to new unreleased features and work along side our team by beta testing features before they go live.',
  image: {
    src: '//source.unsplash.com/random'
  },
  heroSize: 'small',
};

export const Contained = Template.bind({});
Contained.args = {
  title: 'Be the first to try what Kajabi is building',
  description: 'Get early access to new unreleased features and work along side our team by beta testing features before they go live.',
  image: {
    src: `${imageFile}`,
  },
  contained: true,
};

export const withCTA = Template.bind({});
withCTA.args = {
  title: 'Be the first to try what Kajabi is building',
  description: 'Get early access to new unreleased features and work along side our team by beta testing features before they go live.',
  image: {
    src: '//source.unsplash.com/random'
  },
  ctaAttributes: {
    href: '#'
  },
};

export const customBackground = Template.bind({});
customBackground.args = {
  title: 'Be the first to try what Kajabi is building',
  description: 'Get early access to new unreleased features and work along side our team by beta testing features before they go live.',
  image: {
    src: '//source.unsplash.com/random'
  },
  customBackgroundColor: '#E6F4FE',
  borderless: true,
};
