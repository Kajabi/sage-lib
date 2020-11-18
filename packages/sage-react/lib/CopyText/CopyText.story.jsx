import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import CopyText from './CopyText';
import CopyTextCard from './CopyTextCard';
import CopyTextNotes from './CopyTextNotes.md';

storiesOf('Sage/Copy Text', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <CopyText semibold={boolean('Semibold', false)}>
      {text('Text', 'Hello world!')}
    </CopyText>
  ), {
    notes: { markdown: CopyTextNotes }
  })
  .add('Copy Text Card', () => (
    <CopyTextCard semibold={boolean('Semibold', false)}>
      <p><b>Label:</b> Value to copy yourself!</p>
      <p><b>Label:</b> Value to copy yourself!</p>
      <p><b>Label:</b> Value to copy yourself!</p>
    </CopyTextCard>
  ), {
    notes: { markdown: CopyTextNotes }
  });
