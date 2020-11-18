import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import CopyButton from './CopyButton';
import CopyButtonNotes from './CopyButtonNotes.md';

storiesOf('Sage/Copy Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <CopyButton>
      {text('Copy text', 'https://www.example.com')}
    </CopyButton>
  ), {
    notes: { markdown: CopyButtonNotes }
  });
