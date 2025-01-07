import React, { useState } from 'react';
import { Textarea } from './Textarea';

export default {
  title: 'Sage/Textarea',
  component: Textarea,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Basic textarea input field with \'floating\' label.'
      },
    },
  },
  args: {
    hasError: false,
    label: 'Your message',
    message: null,
    id: 'field-1',
  },
};

const Template = (args) => <Textarea {...args} />;
export const Default = Template.bind({});

export const TextareaDisabled = Template.bind({});
TextareaDisabled.args = {
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
      testId="exampleTextArea"
      onChange={onChange}
    />
  );
};
TextareaWithState.args = {
  label: 'Textarea with State',
};
