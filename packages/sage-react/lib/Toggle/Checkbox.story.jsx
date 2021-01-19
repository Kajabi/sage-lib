import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Checkbox } from './Checkbox';

const CheckboxWithState = () => {
  const [checked, toggleChecked] = useState(false);
  const onChange = (newValue, isChecked) => {
    toggleChecked(!isChecked);
  };

  return (
    <Checkbox
      checked={checked}
      disabled={boolean('Disabled', false)}
      hasError={boolean('Has error', false)}
      id="checkbox-demo"
      label={text('Label', 'Checkbox')}
      name={text('Name', 'checkbox')}
      onChange={onChange}
    />
  );
};

const CheckboxesWithState = () => {
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
      if (newValue === value) {
        checked = !checked;
      }

      return { label, value, checked };
    });

    changeItemState(stateItems);
  };

  return (
    <ul className="sage-list">
      {itemState.map((configs, i) => (
        <Checkbox
          id={`check-${i}`}
          itemInList={true}
          key={i.toString()}
          onChange={onChange}
          name="group-1"
          {...configs}
        />
      ))}
    </ul>
  );
};

storiesOf('Sage/Checkbox', module)
  .addDecorator(centerXY)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <CheckboxWithState />
  ))
  .add('Multiples example', () => (
    <CheckboxesWithState />
  ));
