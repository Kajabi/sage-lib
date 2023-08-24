import React, { useState } from 'react';
import { Select } from './Select';

export default {
  title: 'Sage/Select',
  component: Select,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'The form select presents a selectable menu of options. The options within the menu are represented by `<option>` elements.'
      },
    },
  },
  decorators: [(Story) => <div style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}>{Story()}</div>],
  args: {
    label: 'Select',
    id: 'field-1',
    includeLabelInOptions: false,
    options: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
    ],
    placeholder: 'Select an option',
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const SelectWithState = (args) => {
  const [value, updateValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

SelectWithState.args = {
  id: 'field-2',
  label: 'Cool stuff',
  value: 'Option 2',
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ],
  placeholder: 'Choose...'
};

export const DisabledSelectFieldWithOptionPreselected = (args) => <Select {...args} />;

DisabledSelectFieldWithOptionPreselected.args = {
  id: 'field-3',
  label: 'Choose wisely…',
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ],
  disabled: true,
  value: 'Option 3',
};

export const SelectWithOptionDisabled = (args) => {
  const [value, updateValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

SelectWithOptionDisabled.args = {
  id: 'field-4',
  label: 'Select from the following:',
  options: [
    {
      label: 'Country',
      value: '',
      disabled: true,
    },
    'First option',
    'Third option',
    'Fourth option',
    'Fifth option',
  ],
  placeholder: 'Pick an option:'
};

export const SelectWithOptgroups = (args) => {
  const [value, updateValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};

SelectWithOptgroups.args = {
  id: 'field-3',
  label: 'Choose a sport...',
  value: 'nascar',
  options: [
    'Bowling',
    {
      groupLabel: 'Hand Sports',
      groupOptions: [
        {
          value: 'football',
          label: 'Football',
        },
        'Basketball',
      ],
    },
    {
      value: 'nascar',
      label: 'Nascar',
    },
    {
      groupLabel: 'Foot Sports',
      groupOptions: [
        'Soccer',
      ],
    },
  ],
  placeholder: 'Choose wisely…'
};
