import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';

const InputWithState = () => {
  const [value, updateValue] = useState('Test');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <Input
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has an error', false)}
      id="field-1"
      label={text('Label', 'First name')}
      message={text('Message', null)}
      onChange={onChange}
      prefix={text('Prefix', null)}
      required={boolean('Required', false)}
      suffix={text('Suffix', null)}
      type={select('Type', {
        Email: 'email',
        Number: 'number',
        Password: 'password',
        Text: 'text',
      }, 'text')}
      value={value}
    />
  );
};

storiesOf('Sage/Input', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Input
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has an error', false)}
      id="field-1"
      label={text('Label', 'First name')}
      message={text('Message', null)}
      prefix={text('Prefix', null)}
      required={boolean('Required', false)}
      suffix={text('Suffix', null)}
      type={select('Type', {
        Email: 'email',
        Number: 'number',
        Password: 'password',
        Text: 'text',
      }, 'text')}
    />
  ))
  .add('Controlled Component Demo', () => <InputWithState />);
