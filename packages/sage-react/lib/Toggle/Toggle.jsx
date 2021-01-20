import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TOGGLE_STYLES, TOGGLE_TYPES } from './configs';

export const Toggle = ({
  checked,
  className,
  hasError,
  id,
  itemInList,
  label,
  message,
  name,
  onChange,
  standalone,
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
      [`${baseClass}--error`]: hasError,
    }
  );

  if (standalone) {
    return (
      <input
        checked={checked}
        className={`${baseClass} ${baseClass}--standalone ${className || ''}`}
        id={id}
        name={name}
        onChange={handleChange}
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
        id={id}
        name={name}
        onChange={handleChange}
        type={type}
        value={value}
        {...rest}
      />
      <label className={`${baseClass}__label`} htmlFor={id}>{label}</label>
      {message && (
        <div className={`${baseClass}__message`}>{message}</div>
      )}
    </Tag>
  );
};

Toggle.STYLES = TOGGLE_STYLES;
Toggle.TYPES = TOGGLE_TYPES;

Toggle.defaultProps = {
  checked: false,
  className: null,
  hasError: false,
  message: null,
  onChange: (v) => v,
  itemInList: false,
  standalone: false,
  toggleStyle: TOGGLE_STYLES.DEFAULT,
  value: '',
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  itemInList: PropTypes.bool,
  standalone: PropTypes.bool,
  toggleStyle: PropTypes.oneOf(Object.values(TOGGLE_STYLES)),
  type: PropTypes.oneOf(Object.values(TOGGLE_TYPES)).isRequired,
  value: PropTypes.string
};
