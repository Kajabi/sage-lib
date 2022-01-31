import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Hero } from './Hero';
import { Button } from '../Button';
import { Card } from '../Card';
import { SageClassnames, SageTokens } from '../configs';

export default {
  title: 'Sage/Hero',
  component: Hero,
  argTypes: {
    ...selectArgs({
      panelSize: Hero.Sizes,
    }),
  },
  args: {
    description: 'Get early access to new unreleased features and work along side our team by beta testing features before they go live.',
    image: {
      src: '//source.unsplash.com/random/28X28'
    },
    branding: (
      <>
        <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.TE}>
          <img className="sage-hero__branding-image" src="//source.unsplash.com/random/28X28" alt="" width="28px" height="28px" />
          <span className={`${SageClassnames.TYPE.HEADING_5}  ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>Websites</span>
        </Card.Row>
      </>
    ),
    footerActions: (
      <>
        <Button
          className=""
          color="primary"
          raised={false}
        >
          Get started
        </Button>
        <Button
          className=""
          color="primary"
          raised={false}
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
