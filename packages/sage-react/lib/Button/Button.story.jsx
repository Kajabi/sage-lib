import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, optionsKnob as options, select } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { SageTokens } from '../configs';
import Button from './Button';
import ButtonNotes from './ButtonNotes.md';

const optionsConfig = {
  display: 'inline-radio'
};

storiesOf('Sage/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div>
      <Button
        color={options('Color',
          Button.COLORS,
          Button.COLORS.PRIMARY,
          optionsConfig
        )}
        icon={select('Icon', Object.assign({ NONE: null }, SageTokens.ICONS), null)}
        iconOnly={boolean('Icon only?', false)}
        iconPosition={options('Icon Position',
          Button.ICON_POSITIONS,
          Button.ICON_POSITIONS.LEFT,
          optionsConfig
        )}
        title="Click me!"
        subtle={boolean('Subtle style', false)}
        small={boolean('Small (subtle only)', false)}
        alignEnd={boolean('Align end?', false)}
      >
        {text('Label', 'Test me')}
      </Button>
    </div>
  ), {
    notes: { markdown: ButtonNotes }
  })
  .add('Button Group', () => (
    <Button.Group
      gap={options('Gap',
        Button.Group.GAP_OPTIONS,
        Button.Group.GAP_OPTIONS.XS,
        optionsConfig
      )}
    >
      <Button color={Button.COLORS.SECONDARY}>
        Cancel
      </Button>
      <Button color={Button.COLORS.PRIMARY}>
        Save
      </Button>
    </Button.Group>
  ), {
    notes: { markdown: ButtonNotes }
  });
