import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { InputV2 } from './InputV2';
import { Dropdown } from '../Dropdown';
import { Popover } from '../Popover';

export default {
  title: 'Sage/InputV2',
  component: InputV2,
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
      inputMode: InputV2.Mode,
      inputType: InputV2.Type
    }),
  },
  args: {
    id: 'field-2',
    label: 'First name',
  }
};

export const Default = (args) => {
  const [value, updateValue] = useState('Test');
  const onChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <InputV2
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
    <InputV2 {...args} onChange={onChange} value={value} />
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
  inputType: InputV2.Type.EMAIL,
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
    <InputV2
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
    <InputV2
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

export const InputWithLeftElement = Template.bind({});
InputWithLeftElement.args = {
  id: 'field-8',
  message: 'this is a test message',
  appendLeftElement: (
    <Dropdown
      icon={SageTokens.ICONS.ALIGN_LEFT}
      disclosure={true}
      label="Formats"
      panelSize={Dropdown.PANEL_SIZES.SMALL}
      triggerClassnames="sage-btn--rich-text rich-text__format-button"
    />
  ),
};

export const InputWithRightElement = Template.bind({});
InputWithRightElement.args = {
  id: 'field-8',
  message: 'this is a test message',
  appendRightElement: (
    <Dropdown
      icon={SageTokens.ICONS.ALIGN_LEFT}
      disclosure={true}
      label="Formats"
      panelSize={Dropdown.PANEL_SIZES.SMALL}
      triggerClassnames="sage-btn--rich-text rich-text__format-button"
    />
  ),
};

export const InputWithLeftAndRightElements = Template.bind({});
InputWithLeftAndRightElements.args = {
  id: 'field-8',
  message: 'this is a test message',
  appendLeftElement: (
    <Dropdown
      icon={SageTokens.ICONS.ALIGN_LEFT}
      disclosure={true}
      label="Formats"
      panelSize={Dropdown.PANEL_SIZES.SMALL}
      triggerClassnames="sage-btn--rich-text rich-text__format-button"
    />
  ),
  appendRightElement: (
    <Dropdown
      icon={SageTokens.ICONS.ALIGN_LEFT}
      disclosure={true}
      label="Formats"
      panelSize={Dropdown.PANEL_SIZES.SMALL}
      triggerClassnames="sage-btn--rich-text rich-text__format-button"
    />
  )
};
