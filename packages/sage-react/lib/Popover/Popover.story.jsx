import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Popover } from './Popover';

storiesOf('Sage/Popover', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Popover moreLinkURL="//example.com" title="Amazing popover">
      <p>Testing...</p>
    </Popover>
  ));
