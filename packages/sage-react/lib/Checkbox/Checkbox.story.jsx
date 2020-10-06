import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Checkbox } from '../index';

storiesOf('Sage/Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Checkbox
      title={text('title', 'Checkbox')}
      isChecked={boolean('isChecked', false)}
      isDisabled={boolean('isDisabled', false)}
    />
  ));
