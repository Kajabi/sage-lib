import React, { useState } from 'react';
import { Textarea } from './Textarea';

export default {
  title: 'Sage/Textarea',
  component: Textarea,
  args: {
    hasError: false,
    label: 'Your message',
    message: null,
  },
};

const Template = (args) => <Textarea {...args} />;
export const Default = Template.bind({});
Default.args = {
  id: 'field-1',
};

export const TextareaDisabled = Template.bind({});
TextareaDisabled.args = {
  id: 'field-2',
  label: 'Textarea Disabled',
  disabled: true,
};

export const TextareaWithState = (args) => {
  const [value, updateValue] = useState('Test value');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <Textarea
      {...args}
      value={value}
      onChange={onChange}
    />
  );
};
TextareaWithState.args = {
  id: 'field-3',
  label: 'Textarea with State',
};
