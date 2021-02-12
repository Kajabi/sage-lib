import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { SageTokens } from '../configs';
import { Popover } from './Popover';

storiesOf('Sage/Popover', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Popover
      label={text('Trigger Label', 'Learn more')}
      icon={select('Trigger icon', SageTokens.ICONS, SageTokens.ICONS.QUESTION_CIRCLE)}
      iconOnly={boolean('Icon only trigger', true)}
      moreLinkURL="//example.com"
      title="Amazing popover"
    >
      <p>Testing...</p>
    </Popover>
  ));
