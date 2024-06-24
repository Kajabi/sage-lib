import React, { useEffect, useState } from 'react';
import { disableArgs, selectArgs } from '../story-support/helpers';
import { Switch } from './Switch';
import { Toggle } from './Toggle';

/* eslint-disable react/forbid-foreign-prop-types */

export default {
  title: 'Sage/Switch',
  component: Switch,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Checkbox or radio component styled to appear as a toggle.'
      },
    },
  },
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Story()}</div>],
  argTypes: {
    ...selectArgs({
      togglePosition: Toggle.POSITIONS,
      type: Toggle.TYPES,
    }),
  },
  args: {
    label: 'Switch label',
    message: 'Subtext appears',
    name: 'switch-demo',
    type: Toggle.TYPES.CHECKBOX,
    value: 'switch-value'
  }
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Switch
      {...args}
      checked={checked}
      onChange={(value, isChecked) => setChecked(!isChecked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'switch-demo',
};

export const MultiplesExample = (args) => {
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
        checked = args.type === 'radio' ? true : !checked;
      } else if (args.type === 'radio') {
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
          key={`switch-${i.toString()}`}
          name="group-1"
          onChange={onChange}
          type={args.type}
          {...configs}
        />
      ))}
    </ul>
  );
};
MultiplesExample.args = {
  type: Toggle.TYPES.RADIO
};
MultiplesExample.argTypes = {
  ...disableArgs(Object.keys(Toggle.propTypes))
};
