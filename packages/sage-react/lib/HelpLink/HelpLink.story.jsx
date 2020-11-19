import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import HelpLink from '../HelpLink';

storiesOf('Sage/HelpLink', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <HelpLink href="http://example.com" target="_blank" referrer="no-referrer" labelIsVisible={boolean('Show label', false)}>
      {text('Text', 'Learn something!')}
    </HelpLink>
  ));
