import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Radio from './Radio';

const RadioWithState = () => {
  const [checked, toggleChecked] = useState(false);
  const onChange = (newValue, isChecked) => {
    toggleChecked(!isChecked);
  };

  return (
    <Radio
      checked={checked}
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has error', false)}
      id="radio-demo"
      label={text('Label', 'Radio')}
      onChange={onChange}
    />
  );
};

const RadioesWithState = () => {
  const items = [
    {
      label: 'Option 1',
      value: 'option-1',
      checked: false,
    }, {
      label: 'Option 2',
      value: 'option-2',
      checked: false,
    }, {
      label: 'Option 3',
      value: 'option-3',
      checked: false,
    }, {
      label: 'Option 4',
      value: 'option-4',
      checked: false,
    }
  ];

  const [itemState, changeItemState] = useState(items);

  const onChange = (newValue) => {
    const stateItems = itemState.map(({ label, value, checked }) => {
      checked = newValue === value;

      return { label, value, checked };
    });

    changeItemState(stateItems);
  };

  return (
    <ul className="sage-list">
      {itemState.map((configs, i) => (
        <Radio
          id={`check-${i}`}
          key={i.toString()}
          onChange={onChange}
          name="group-1"
          itemInList={true}
          {...configs}
        />
      ))}
    </ul>
  );
};

storiesOf('Sage/Radio', module)
  .addDecorator(centerXY)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <RadioWithState />
  ))
  .add('Multiples example', () => (
    <RadioesWithState />
  ));
