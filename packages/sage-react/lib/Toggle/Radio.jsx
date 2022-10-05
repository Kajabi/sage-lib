import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from './Toggle';

export const Radio = ({
  checked,
  className,
  customContent,
  disabled,
  hasBorder,
  hasError,
  id,
  itemInList,
  label,
  message,
  name,
  onChange,
  required,
  standalone,
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
    hideText={false}
    id={id}
    itemInList={itemInList}
    label={label}
    message={message}
    name={name}
    onChange={onChange}
    partialSelection={false}
    required={required}
    standalone={standalone}
    togglePosition={Toggle.POSITIONS.DEFAULT}
    toggleStyle={Toggle.STYLES.DEFAULT}
    type={Toggle.TYPES.RADIO}
    value={value}
    {...rest}
  />
);

Radio.defaultProps = {
  checked: false,
  className: null,
  customContent: null,
  disabled: false,
  hasBorder: false,
  hasError: false,
  message: null,
  onChange: (v) => v,
  itemInList: false,
  required: false,
  standalone: false,
  value: '',
};

Radio.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  customContent: PropTypes.node,
  disabled: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  itemInList: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  standalone: PropTypes.bool,
  value: PropTypes.string
};
