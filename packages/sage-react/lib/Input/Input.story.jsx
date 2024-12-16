import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Input } from './Input';
import { Popover } from '../Popover';

/* eslint-disable no-console */

export default {
  title: 'Sage/Input',
  component: Input,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Basic text input form fields with \'floating\' labels.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      inputMode: Input.Mode,
      inputType: Input.Type
    }),
  },
  args: {
    id: 'field-2',
    label: 'First name',
    testId: 'exampleInput',
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
      mode={args.inputMode}
      onChange={onChange}
      prefix={args.prefix}
      required={false}
      standalone={args.standalone}
      suffix={args.suffix}
      testId={args.test}
      type={args.inputType}
      value={value}
    />
  );
};

const Template = (args) => {
  const [value, updateValue] = useState(args.value);
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <Input {...args} onChange={onChange} value={value} />
  );
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  hasError: true,
  id: 'field-3'
};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  disabled: true,
  id: 'field-4'
};

export const InputReadonly = Template.bind({});
InputReadonly.args = {
  readonly: true,
  value: 'You cannot change me',
  id: 'field-5'
};

export const InputEmail = Template.bind({});
InputEmail.args = {
  inputType: Input.Type.EMAIL,
  label: 'Email address',
  id: 'field-6',
  value: 'invalid. replace with email address'
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
      message={args.message}
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

const FocusTemplate = (args) => {
  const [value, updateValue] = useState(args.value);
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  const onFocus = () => {
    console.log('Has Focus!!!!');
  };

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Input {...args} onChange={onChange} value={value} onFocus={onFocus} ref={inputRef} />
  );
};

export const InputFocusTest = FocusTemplate.bind({});
InputFocusTest.args = {
  inputType: Input.Type.EMAIL,
  label: 'Email address',
  id: 'field-focus',
};

Default.args = {
  id: 'field-1',
  message: 'this is a test message',
};

InputWithStaticIcon.args = {
  icon: SageTokens.ICONS.INFO_CIRCLE,
};

InputWithPopover.args = {
  id: 'field-7',
  message: 'this is a test message',
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
