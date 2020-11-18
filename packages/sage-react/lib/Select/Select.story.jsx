import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Select } from '../';

const SelectWithState = () => {
  const [value, updateValue] = useState('');
  return (
    <Select
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has an error', false)}
      id="field-2"
      label={text('Label', 'Choose...')}
      message={text('Message', null)}
      required={boolean('Required', false)}
      options={[
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
      ]}
      value={value}
      onChange={e => updateValue(e.target.value)}
    />
  );
};

storiesOf('Sage/Select', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ width: '300px' }}>
      <SelectWithState />
    </div>
  ));
