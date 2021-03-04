import React, { useState } from 'react';
import { Input } from './Input';

export default {
  title: 'Sage/Input',
  component: Input,
  args: {
    label: 'Label'
  }
};

const Template = (args) => <Input {...args} />;

export const Default = (args) => {
  const [value, updateValue] = useState('Test');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <>
      <Input
        className={args.className}
        disabled={args.disabled}
        hasError={args.hasError}
        id={args.id}
        label={args.label}
        message={null}
        onChange={onChange}
        prefix={null}
        required={false}
        standalone={args.standalone}
        suffix={null}
        value={value}
      />
    </>
  );
};

Default.args = {
  id: 'field-1',
  label: 'First name'
}

