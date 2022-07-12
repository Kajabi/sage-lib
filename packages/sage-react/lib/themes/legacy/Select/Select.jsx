import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { selectItemPropTypes, selectStructuredItemPropTypes } from './configs';

export const Select = ({
  className,
  disabled,
  hasError,
  id,
  includeLabelInOptions,
  label,
  message,
  onChange,
  options,
  value,
  ...rest
}) => {
  const classNames = classnames(
    'sage-select',
    className,
    {
      'sage-form-field--error': hasError,
      'sage-select--value-selected': value,
    }
  );

  return (
    <div className={classNames}>
      <select
        className="sage-select__field"
        id={id}
        onChange={onChange}
        placeholder={label}
        value={value}
        disabled={disabled}
        {...rest}
      >
        {(label && includeLabelInOptions) && <option label={label} />}

        {options.map((option, i) => {
          let optionLabel,
            optionDisabled,
            optionValue;
          if (typeof option === 'string') {
            optionLabel = option;
            optionValue = option;
          } else {
            optionLabel = option.label;
            optionValue = option.value;
            optionDisabled = option.disabled;
          }

          return (
            <option
              key={i.toString()}
              value={optionValue}
              disabled={optionDisabled}
            >
              {optionLabel}
            </option>
          );
        })}
      </select>
      {label && (
        <label htmlFor={id} className="sage-select__label">{label}</label>
      )}
      {message && (
        <div className="sage-select__message">{message}</div>
      )}
      <i className="sage-select__arrow" aria-hidden="true" />
    </div>
  );
};

Select.itemPropTypes = selectItemPropTypes;
Select.structuredItemPropTypes = selectStructuredItemPropTypes;

Select.defaultProps = {
  className: null,
  disabled: false,
  hasError: false,
  includeLabelInOptions: false,
  label: null,
  message: null,
  onChange: (evt) => evt,
  options: [],
  value: '',
};

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  includeLabelInOptions: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(selectItemPropTypes),
  value: PropTypes.string,
};
