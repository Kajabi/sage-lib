import React, { useState } from 'react';
import { Select } from './Select';

export default {
  title: 'Sage/Select',
  component: Select,
  decorators: [(Story) => <div style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}><Story /></div>],
  args: {
    label: 'Select',
    includeLabelInOptions: false,
    options: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
    ]
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const SearchWithState = (args) => {
  const [value, updateValue] = useState('');
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};
SearchWithState.args = {
  id: 'field-2',
  label: 'Cool stuff',
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ],
  placeholder: 'Choose...'
};

export const SearchDisabled = (args) => {
  const [value, updateValue] = useState('');
  return (
    <Select
      {...args}
      value={value}
      onChange={(evt) => updateValue(evt.target.value)}
    />
  );
};
SearchDisabled.args = {
  id: 'field-3',
  label: 'Choose...',
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ],
  disabled: true
};
