import React, { useState } from 'react';
import { Select } from './Select';

export default {
  title: 'Sage/Select',
  component: Select,
  decorators: [(Story) => <div style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}><Story /></div>],
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
  placeholder: 'Choose wisely…'
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
    'First option',
    {
      label: 'Second option',
      value: 'second-option',
      disabled: true,
    },
    'Third option',
    'Fourth option',
    'Fifth option',
  ],
  placeholder: 'Select from the following:'
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
  options: [
    'Bowling',
    {
      group_label: 'Hand Sports',
      group_options: [
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
      group_label: 'Foot Sports',
      group_options: [
        'Soccer',
      ],
    },
  ],
  placeholder: 'Choose wisely…'
};
