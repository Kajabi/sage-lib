import React, { useState } from 'react';
import { Textarea } from './Textarea';

export default {
  title: 'Sage/Textarea',
  component: Textarea,
  args: {
    hasError: false,
    id: 'field-2',
    label: 'Your message',
    message: null,
  },
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});

export const TextareaWithState = () => {
  const [value, updateValue] = useState('Test value');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <Textarea
      id="field-2"
      label='Your message'
      value={value}
      onChange={onChange}
    />
  );
};
