import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Hero } from './Hero';
import { Button } from '../Button';

import imageFile from '../../public/HeroContainerPlaceholder.png';
import heroFull from '../../public/HeroWorkshopPlaceholder.jpg';

export default {
  title: 'Sage/Hero',
  component: Hero,
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
    title: 'Learn with Kajabi in our live workshops',
    description: 'Did you know we offer free workshops? Kajabi experts host live workshops every week on topics from marketing your products to building out your Kajabi account.',
    image: {
      src: `${heroFull}`,
    },
    footerActions: (
      <>
        <Button
          className=""
          color="primary"
        >
          Learn more
        </Button>
      </>
    ),
  }
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  title: 'Be the first to try what Kajabi is building',
  description: 'Did you know we offer free workshops? Kajabi experts host live workshops every week on topics from marketing your products to building out your Kajabi account.',
  image: {
    src: `${heroFull}`,
  },
  heroSize: 'small',
};

export const Contained = Template.bind({});
Contained.args = {
  title: 'Be the first to try what Kajabi is building',
  description: 'Did you know we offer free workshops? Kajabi experts host live workshops every week on topics from marketing your products to building out your Kajabi account.',
  image: {
    src: `${imageFile}`,
  },
  contained: true,
};

export const withCTA = Template.bind({});
withCTA.args = {
  title: 'Be the first to try what Kajabi is building',
  description: 'Did you know we offer free workshops? Kajabi experts host live workshops every week on topics from marketing your products to building out your Kajabi account.',
  image: {
    src: `${heroFull}`,
  },
  ctaAttributes: {
    href: '#'
  },
};

export const customBackground = Template.bind({});
customBackground.args = {
  title: 'Be the first to try what Kajabi is building',
  description: 'Did you know we offer free workshops? Kajabi experts host live workshops every week on topics from marketing your products to building out your Kajabi account.',
  image: {
    src: `${heroFull}`,
  },
  customBackgroundColor: '#e6f4fe',
  borderless: true,
};
