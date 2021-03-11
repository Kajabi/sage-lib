import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { Checkbox } from './Checkbox';
import { Toggle } from './Toggle';

export default {
  title: 'Sage/Checkbox',
  component: Checkbox,
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Story /></div>],
  args: {
    label: 'Checkbox',
    type: Toggle.TYPES.CHECKBOX,
  },
  argTypes: {
    ...selectArgs({
      type: Toggle.TYPES
    })
  }
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const MultipleExample = () => {
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
