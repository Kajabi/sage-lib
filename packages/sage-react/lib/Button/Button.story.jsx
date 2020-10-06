import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { Button, Icon } from '../index';
import { withKnobs, text, boolean, optionsKnob as options, select } from '@storybook/addon-knobs';

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
          Button.configs.COLORS,
          Button.configs.COLORS.Primary,
          optionsConfig
        )}
        icon={select('Icon', [null].concat(Object.values(Icon.ICONS)), null)}
        iconOnly={boolean('Icon only?', false)}
        iconPosition={options('Icon Position',
          Button.configs.ICON_POSITIONS,
          Button.configs.ICON_POSITIONS.Left,
          optionsConfig
        )}
        htmlAttributes={{
          title: 'Click me!'
        }}
        size={options('Size',
          Button.configs.SIZES,
          Button.configs.SIZES.Default,
          optionsConfig
        )}
        alignEnd={boolean('Align end?', false)}
      >
        {text('Label', 'Test me')}
      </Button>
    </div>
  ), {
    notes: { markdown: ButtonNotes }
  });
