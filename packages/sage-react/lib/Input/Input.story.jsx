import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Input } from './Input';
import { Popover } from '../Popover';

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

export const InputWithStaticIcon = (args) => {
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

export const InputWithPopover = (args) => {
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
      >
        <Popover
          icon={SageTokens.ICONS.INFO_CIRCLE}
          moreLinkText="Link text"
          moreLinkURL="https://example.com"
          position="left"
          title="Amazing popover"
        >
          <p>
            I can put whatever content I want in here and use the custom class
            as a hook to style it like a good &apos;ol BEM mixin!
          </p>
        </Popover>
      </Input>
    </>
  );
};

Default.args = {
  id: 'field-1',
  label: 'First name'
};

InputWithStaticIcon.args = {
  label: 'First name',
};

InputWithPopover.args = {
  label: 'First name',
};
