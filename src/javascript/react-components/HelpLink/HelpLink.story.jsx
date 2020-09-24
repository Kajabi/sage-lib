import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { HelpLink } from '../index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';


storiesOf('Sage/HelpLink', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <HelpLink labelIsVisible={boolean('Show label', false)}>
      {text('Text', 'Learn something!')}
    </HelpLink>
  ));
