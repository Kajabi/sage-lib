import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { Radio } from '../index';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

storiesOf('Sage/Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Radio
      title={text('Title', 'Radio')}
      isChecked={boolean('isChecked', false)}
      isDisabled={boolean('isDisabled', false)}
    />
  ));
