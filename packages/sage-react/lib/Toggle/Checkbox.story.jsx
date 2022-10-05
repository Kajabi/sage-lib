import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Sage/Checkbox',
  component: Checkbox,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Checkboxes provide users with selectable options like toggling a single setting or selecting multiple options from a list.'
      },
    },
  },
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Story /></div>],
  args: {
    label: 'Checkbox',
    id: 'checkbox-1',
    name: 'checkbox-1',
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'checkbox-disabled',
  label: 'Remember Me',
  disabled: true
};

export const DefaultWithMessage = Template.bind({});
DefaultWithMessage.args = {
  id: 'checkbox-w-message',
  label: 'Remember Me',
  message: 'Save my login details for next time'
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  id: 'checkbox-checked',
  label: 'Remember Me',
  message: 'Save my login details for next time'
};

export const PartialSelection = Template.bind({});
Checked.args = {
  checked: true,
  id: 'checkbox-partial',
  label: 'Remember Me',
  message: 'Save my login details for next time',
  partialSelection: true,
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
  id: 'checkbox-error',
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
      id: 'multiple-option-1',
      value: 'option-1',
      checked: false,
    }, {
      label: 'Option 2',
      id: 'multiple-option-2',
      value: 'option-2',
      checked: false,
    }, {
      label: 'Option 3',
      id: 'multiple-option-3',
      value: 'option-3',
      checked: false,
    }, {
      label: 'Option 4',
      id: 'multiple-option-4',
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
          key={`check-${i.toString()}`}
          onChange={onChange}
          name="group-1"
          {...configs}
        />
      ))}
    </ul>
  );
};
