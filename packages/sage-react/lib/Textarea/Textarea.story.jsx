import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Textarea } from './Textarea';

const TextareaWithState = () => {
  const [value, updateValue] = useState('Test');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <Textarea
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has an error', false)}
      id="field-2"
      label={text('Label', 'Your message')}
      message={text('Message', null)}
      required={boolean('Required', false)}
      value={value}
      onChange={onChange}
    />
  );
};

storiesOf('Sage/Textarea', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Textarea
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has an error', false)}
      id="field-2"
      label={text('Label', 'Your message')}
      message={text('Message', null)}
      required={boolean('Required', false)}
    />
  ))
  .add('Controlled Component Demo', () => <TextareaWithState />);
