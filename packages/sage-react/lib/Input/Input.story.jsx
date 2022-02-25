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
      type: Input.Type
    }),
  },
  args: {
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
  value: "You can't change me"
};

export const InputEmail = Template.bind({});
InputEmail.args = {
  type: Input.Type.EMAIL,
  label: "Email address"
};

export const InputPassword = Template.bind({});
InputPassword.args = {
  type: Input.Type.PASSWORD,
  label: "Create a password",
  maxLength: "128",
  minLength: "8",
};

export const InputNumbers = Template.bind({});
InputNumbers.args = {
  inputMode: Input.Mode.NUMBERIC,
  type: Input.Type.NUMBER,
  label: "Enter quantity (max 48)",
  max: "48",
  maxLength: "2",
  pattern: "[0-9]{2}",
  required: true

};

export const InputNumbersIncremented = Template.bind({});
InputNumbersIncremented.args = {
  type: Input.Type.NUMBER,
  label: "Enter quantity (max 5%)",
  max: "5",
  maxLength: "2",
  min: "0",
  pattern: "[0-9]{2}",
  required: true,
  step: "0.5"
};

export const InputCustomPlaceholderLabelVisible = Template.bind({});
InputCustomPlaceholderLabelVisible.args = {
  label: "Reply-to email",
  placeholder: "Custom placeholder text",
  hasPlaceholder: true
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

export const InputErrorWithStaticIcon = Template.bind({});
InputErrorWithStaticIcon.args = {
  icon: SageTokens.ICONS.INFO_CIRCLE,
  hasError: true,
  value: "Test",
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
