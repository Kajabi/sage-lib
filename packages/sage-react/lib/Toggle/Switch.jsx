import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from './Toggle';

export const Switch = ({
  checked,
  className,
  customContent,
  disabled,
  hasBorder,
  hasError,
  hideText,
  id,
  itemInList,
  label,
  message,
  name,
  onChange,
  required,
  togglePosition,
  type,
  value,
  ...rest
}) => (
  <Toggle
    checked={checked}
    className={className}
    customContent={customContent}
    disabled={disabled}
    hasBorder={hasBorder}
    hasError={hasError}
    hideText={hideText}
    id={id}
    itemInList={itemInList}
    label={label}
    message={message}
    name={name}
    onChange={onChange}
    partialSelection={false}
    required={required}
    standalone={false}
    togglePosition={togglePosition}
    toggleStyle={Toggle.STYLES.SWITCH}
    type={type}
    value={value}
    {...rest}
  />
);

Switch.defaultProps = {
  checked: false,
  className: null,
  customContent: null,
  disabled: false,
  hasBorder: false,
  hasError: false,
  hideText: false,
  message: null,
  onChange: (v) => v,
  itemInList: false,
  required: false,
  togglePosition: Toggle.POSITIONS.DEFAULT,
  type: Toggle.TYPES.CHECKBOX,
  value: '',
};

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  customContent: PropTypes.node,
  disabled: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasError: PropTypes.bool,
  hideText: PropTypes.bool,
  id: PropTypes.string.isRequired,
  itemInList: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  togglePosition: PropTypes.oneOf(Object.values(Toggle.POSITIONS)),
  type: PropTypes.oneOf(Object.values(Toggle.TYPES)),
  value: PropTypes.string,
};
