import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Button from '../Button';
import Label from '../Label';
import { SageTokens } from '../configs';
import LabelNotes from './LabelNotes.md';

const LabelWithDefaultProps = ({...rest}) => (
  <Label
    color={select('Color', Label.COLORS, Label.COLORS.DRAFT)}
    icon={select('Icon', Object.assign({ NONE: null }, SageTokens.ICONS), null)}
    style={select('Style', Label.STYLES, Label.STYLES.DEFAULT)}
    value={text('Text', 'Hello world')}
    {...rest}
  />
);

storiesOf('Sage/Label', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <LabelWithDefaultProps
      interactiveType={select('Interactive Type', Object.assign({ NONE: null }, Label.INTERACTIVE_TYPES), null)}
    />
  ), {
    notes: { markdown: LabelNotes }
  })
  .add('With secondary_button', () => (
    <LabelWithDefaultProps
      interactiveType={Label.INTERACTIVE_TYPES.SECONDARY_BUTTON}
      secondaryButton={
        <Button
          color={Button.COLORS.SECONDARY}
          subtle={true}
          icon={SageTokens.ICONS.REMOVE}
          iconOnly={true}
        >
          Cancel
        </Button>
      }
    />
  ));
