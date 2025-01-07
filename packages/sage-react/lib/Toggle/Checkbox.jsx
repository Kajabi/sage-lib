import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from './Toggle';

export const Checkbox = ({
  checked,
  className,
  customContent,
  disabled,
  hasError,
  id,
  itemInList,
  label,
  message,
  name,
  onChange,
  partialSelection,
  required,
  standalone,
  kjbElementId,
  value,
  ...rest
}) => (
  <Toggle
    checked={checked}
    className={className}
    customContent={customContent}
    disabled={disabled}
    hasBorder={false}
    hasError={hasError}
    hideText={false}
    id={id}
    itemInList={itemInList}
    label={label}
    message={message}
    name={name}
    onChange={onChange}
    partialSelection={partialSelection}
    required={required}
    standalone={standalone}
    togglePosition={Toggle.POSITIONS.DEFAULT}
    toggleStyle={Toggle.STYLES.DEFAULT}
    type={Toggle.TYPES.CHECKBOX}
    value={value}
    {...rest}
  />
);

Checkbox.defaultProps = {
  checked: false,
  className: null,
  customContent: null,
  disabled: false,
  hasError: false,
  message: null,
  onChange: (v) => v,
  partialSelection: false,
  itemInList: false,
  required: false,
  standalone: false,
  kjbElementId: null,
  value: '',
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  customContent: PropTypes.node,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  itemInList: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  partialSelection: PropTypes.bool,
  required: PropTypes.bool,
  standalone: PropTypes.bool,
  kjbElementId: PropTypes.string,
  value: PropTypes.string
};
