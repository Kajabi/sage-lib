import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { Radio } from './Radio';
import { Toggle } from './Toggle';

export default {
  title: 'Sage/Radio',
  component: Radio,
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Story /></div>],
  args: {
    label: 'Radio',
    type: Toggle.TYPES.RADIO,
  },
  argTypes: {
    ...selectArgs({
      type: Toggle.TYPES
    })
  }
};

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});

export const MultipleRadios = () => {
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
