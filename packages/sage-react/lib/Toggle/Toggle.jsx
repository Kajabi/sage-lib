import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TOGGLE_POSITIONS, TOGGLE_STYLES, TOGGLE_TYPES } from './configs';

export const Toggle = ({
  checked,
  className,
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
  standalone,
  togglePosition,
  toggleStyle,
  type,
  value,
  ...rest
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;

    if (onChange) {
      onChange(newValue, checked, e);
    }
  };

  const baseClass = `sage-${toggleStyle || type}`;

  const classNames = classnames(
    baseClass,
    className,
    {
      [`${baseClass}--has-border`]: hasBorder,
      [`${baseClass}--error`]: hasError,
      [`${baseClass}--toggle-${togglePosition}`]: togglePosition,
    }
  );

  const labelClassNames = classnames(
    `${baseClass}__label`,
    {
      [`${baseClass}__label--hide-text`]: hideText,
    }
  );

  if (standalone) {
    return (
      <input
        checked={checked}
        className={`${baseClass} ${baseClass}--standalone ${className || ''}`}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        required={required}
        type={type}
        value={value}
        {...rest}
      />
    );
  }

  const Tag = itemInList ? 'li' : 'div';

  return (
    <Tag className={classNames}>
      <input
        checked={checked}
        className={`${baseClass}__input`}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        required={required}
        type={type}
        value={value}
        {...rest}
      />
      <label className={labelClassNames} htmlFor={id}>{label}</label>
      {message && (
        <div className={`${baseClass}__message`}>{message}</div>
      )}
    </Tag>
  );
};

Toggle.POSITIONS = TOGGLE_POSITIONS;
Toggle.STYLES = TOGGLE_STYLES;
Toggle.TYPES = TOGGLE_TYPES;

Toggle.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  hasBorder: false,
  hasError: false,
  hideText: false,
  message: null,
  onChange: (v) => v,
  itemInList: false,
  required: false,
  standalone: false,
  togglePosition: Toggle.POSITIONS.DEFAULT,
  toggleStyle: Toggle.TYPES.DEFAULT,
  value: '',
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasError: PropTypes.bool,
  hideText: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  itemInList: PropTypes.bool,
  required: PropTypes.bool,
  standalone: PropTypes.bool,
  togglePosition: PropTypes.oneOf(Object.values(Toggle.POSITIONS)),
  toggleStyle: PropTypes.oneOf(Object.values(Toggle.STYLES)),
  type: PropTypes.oneOf(Object.values(Toggle.TYPES)).isRequired,
  value: PropTypes.string
};
