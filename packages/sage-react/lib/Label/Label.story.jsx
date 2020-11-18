import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Button from '../Button';
import Label from '../Label';
import { SageTokens } from '../configs';
import LabelNotes from './LabelNotes.md';

storiesOf('Sage/Label', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Label
      color={select('Color', Label.COLORS, Label.COLORS.DRAFT)}
      iconLeft={select('Left Icon', Object.assign({ NONE: null }, SageTokens.ICONS), null)}
      iconRight={select('Right Icon', Object.assign({ NONE: null }, SageTokens.ICONS), null)}
      type={select('Type', Label.TYPES, Label.TYPES.DEFAULT)}
    >
      {text('Text', 'Hello world')}
    </Label>
  ), {
    notes: { markdown: LabelNotes }
  })
  .add('Label with button', () => (
    <Label
      color={select('Color', Label.COLORS, Label.COLORS.DRAFT)}
      iconLeft={select('Left Icon', Object.assign({ NONE: null }, SageTokens.ICONS), null)}
      iconRight={select('Right Icon', Object.assign({ NONE: null }, SageTokens.ICONS), null)}
      type={select('Type', Label.TYPES, Label.TYPES.DEFAULT)}
    >
      <span>Content</span>
      <Button
        color={Button.COLORS.SECONDARY}
        subtle={true}
        icon={SageTokens.ICONS.DOWN_SMALL}
        iconOnly={true}
      >
        More
      </Button>
    </Label>
  ));
