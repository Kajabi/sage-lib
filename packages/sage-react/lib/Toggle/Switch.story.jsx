import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { Switch } from './Switch';
import { Toggle } from './Toggle';

export default {
  title: 'Sage/Switch',
  component: Switch,
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Story /></div>],
  argTypes: {
    ...selectArgs({
      type: Toggle.TYPES
    }),
  },
  args: {
    checked: false,
    disabled: false,
    hasError: false,
    label: 'Switch label',
    message: 'Subtext appears',
    name: 'switch-demo',
    value: 'Demo'
  }
};

export const Default = (type) => {
  const [on, toggleOn] = useState(false);
  return (
    <div>
      <Switch
        checked={on}
        disabled={false}
        hasError={false}
        id="switch-demo"
        label="Switch label"
        message="Subtext appears"
        name="switch-demo"
        onChange={(val, isOn) => toggleOn(!isOn)}
        type={Toggle.TYPES.RADIO}
        value="Demo"
      />
    </div>
  );
};

export const MultiplesExample = (type) => {
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
        checked = type === 'radio' ? true : !checked;
      } else if (type === 'radio') {
        checked = false;
      }

      return { label, value, checked };
    });

    changeItemState(stateItems);
  };

  return (
    <ul className="sage-list">
      {itemState.map((configs, i) => (
        <Switch
          id={`switch-${i}`}
          itemInList={true}
          key={i.toString()}
          name="group-1"
          onChange={onChange}
          type={type.type}
          {...configs}
        />
      ))}
    </ul>
  );
};

MultiplesExample.args = {
  type: Toggle.TYPES.RADIO
};
