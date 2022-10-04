import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TOGGLE_POSITIONS, TOGGLE_STYLES, TOGGLE_TYPES } from './configs';

export const Toggle = ({
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
  partialSelection,
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
      [`${baseClass}--custom`]: type === Toggle.TYPES.CHECKBOX || Toggle.TYPES.RADIO ? customContent : null,
      [`${baseClass}--error`]: hasError,
      [`${baseClass}--toggle-${togglePosition}`]: togglePosition,
      [`${baseClass}--partial-selection`]: partialSelection && type === Toggle.TYPES.CHECKBOX,
    }
  );

  const labelClassNames = classnames(
    `${baseClass}__label`,
    {
      [`${baseClass}__label--hide-text`]: hideText,
    }
  );

  if (standalone) {
    const standaloneClassnames = classnames(
      baseClass,
      `${baseClass}--standalone`,
      className,
      {
        [`${baseClass}--partial-selection`]: partialSelection && type === Toggle.TYPES.CHECKBOX,
      }
    );

    return (
      <input
        checked={checked}
        className={standaloneClassnames}
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

  const renderCustomContent = () => {
    if (type === Toggle.TYPES.CHECKBOX || Toggle.TYPES.RADIO) {
      return (
        <div className={`${baseClass}__custom-content`}>
          {customContent}
        </div>
      );
    }

    return null;
  };

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
      {renderCustomContent()}
    </Tag>
  );
};

Toggle.POSITIONS = TOGGLE_POSITIONS;
Toggle.STYLES = TOGGLE_STYLES;
Toggle.TYPES = TOGGLE_TYPES;

Toggle.defaultProps = {
  checked: false,
  className: null,
  customContent: null,
  disabled: false,
  hasBorder: false,
  hasError: false,
  hideText: false,
  message: null,
  onChange: (v) => v,
  partialSelection: false,
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
  partialSelection: PropTypes.bool,
  required: PropTypes.bool,
  standalone: PropTypes.bool,
  togglePosition: PropTypes.oneOf(Object.values(Toggle.POSITIONS)),
  toggleStyle: PropTypes.oneOf(Object.values(Toggle.STYLES)),
  type: PropTypes.oneOf(Object.values(Toggle.TYPES)).isRequired,
  value: PropTypes.string
};
