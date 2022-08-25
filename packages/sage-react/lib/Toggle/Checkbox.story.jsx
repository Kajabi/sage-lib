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
    id: 'checkbox-1',
    name: 'checkbox-1',
  },
  argTypes: {
    ...selectArgs({
      type: Toggle.TYPES
    })
  }
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Remember Me',
  disabled: true
};

export const DefaultWithMessage = Template.bind({});
DefaultWithMessage.args = {
  label: 'Remember Me',
  message: 'Save my login details for next time'
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: 'Remember Me',
  message: 'Save my login details for next time'
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
  label: 'Remember Me',
  message: 'Save my login details for next time'
};

export const DefaultWithCustomContent = Template.bind({});
DefaultWithCustomContent.args = {
  customContent: (
    <p>Custom Content</p>
  )
};

export const MultipleCheckboxes = (args) => {
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
          {...args}
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
