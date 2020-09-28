import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../decorators';
import { Switch } from '../index';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

storiesOf('Sage/Switch', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Switch
      title={text('Title', 'Switch (Checkbox)')}
      type={select('Type', ['radio', 'checkbox'], 'radio')}
      isChecked={boolean('isChecked', true)}
      isDisabled={boolean('isDisabled', false)}
      err={boolean('Error', false)}
    />
  ));
