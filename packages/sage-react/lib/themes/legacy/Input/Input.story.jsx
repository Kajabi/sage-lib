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
      inputMode: Input.Mode,
      inputType: Input.Type
    }),
  },
  args: {
    id: 'test-input',
    disabled: false,
    label: 'First name',
    readonly: false
  }
};

export const Default = (args) => {
  const [value, updateValue] = useState('Test');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <Input
      className={args.className}
      disabled={args.disabled}
      hasError={args.hasError}
      hasPlaceholder={args.hasPlaceholder}
      icon={args.icon}
      id={args.id}
      label={args.label}
      message={null}
      onChange={onChange}
      prefix={args.prefix}
      required={false}
      standalone={args.standalone}
      suffix={args.suffix}
      value={value}
    />
  );
};

const Template = (args) => <Input {...args} />;
export const InputWithError = Template.bind({});
InputWithError.args = {
  hasError: true
};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  disabled: true
};

export const InputReadonly = Template.bind({});
InputReadonly.args = {
  readonly: true,
  value: 'You cannot change me'
};

export const InputEmail = Template.bind({});
InputEmail.args = {
  inputType: Input.Type.EMAIL,
  label: 'Email address'
};

export const InputWithStaticIcon = (args) => {
  const [value, updateValue] = useState('Test');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <Input
      className={args.className}
      disabled={args.disabled}
      hasError={args.hasError}
      hasPlaceholder={args.hasPlaceholder}
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
  );
};

export const InputWithPopover = (args) => {
  const [value, updateValue] = useState('Test');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <Input
      className={args.className}
      disabled={args.disabled}
      hasError={args.hasError}
      hasPlaceholder={args.hasPlaceholder}
      icon={args.icon}
      id={args.id}
      label={args.label}
      message={null}
      onChange={onChange}
      popover={args.popover}
      prefix={null}
      required={false}
      standalone={args.standalone}
      suffix={null}
      value={value}
    />
  );
};

Default.args = {
  id: 'field-1',
};

InputWithStaticIcon.args = {
  icon: SageTokens.ICONS.INFO_CIRCLE,
};

InputWithPopover.args = {
  popover: (
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
  )
};
