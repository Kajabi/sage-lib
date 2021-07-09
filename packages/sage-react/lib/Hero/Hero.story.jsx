import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, optionsKnob as options, select } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { SageTokens } from '../configs';
import Button from '../Button';
import Hero from './Hero';

storiesOf('Sage/Hero', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ marginTop: 50 }}>
      <Hero 
        altText=""
        description={text('Description', 'Get early access to new unreleased features and work along side our team by beta testing features before they go live.')}
        image="//source.unsplash.com/800x500"
        title={text('title', 'Be the first to try what Kajabi is building')}
        button={
          <Button
            className="sage-popover__button"
            icon={SageTokens.ICONS.REMOVE}
            iconPosition='left'
            color="secondary"
            subtle={true}
          >
            {text('Text', 'Dismiss')}
          </Button>
        }
      />
    </div>
  ));
