import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Input } from './Input';

export default {
  title: 'Sage/Input',
  component: Input,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
    }),
  },
  args: {
    icon: SageTokens.ICONS.INFO_CIRCLE,
    label: 'Label',
  }
};

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
        icon={args.icon}
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
};
