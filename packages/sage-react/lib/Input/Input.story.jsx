import React, { useState } from 'react';
import { Input } from './Input';

export default {
  title: 'Sage/Input',
  component: Input,
  args: {
    label: "Label"
  }
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Stateful = () => {
  const [value, updateValue] = useState('Test');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <>
      <Input
        disabled={false}
        id="field-1"
        label='First name'
        message={null}
        onChange={onChange}
        prefix={null}
        required={false}
        suffix={null}
        value={value}
      />
    </>
  );
};
