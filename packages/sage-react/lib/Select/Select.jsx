import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
  placeholder,
  required,
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

  const buildOption = (option, i) => {
    let optionLabel,
      optionValue,
      optionDisabled;
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
        key={optionValue + i.toString()}
        value={optionValue}
        disabled={optionDisabled}
      >
        {optionLabel}
      </option>
    );
  };

  const buildOptgroup = ({ disabled, groupLabel, groupOptions }, i) => (
    <optgroup
      label={groupLabel}
      disabled={disabled}
      key={groupLabel + i.toString()}
    >
      {groupOptions && groupOptions.map(buildOption)}
    </optgroup>
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
        required={required}
        {...rest}
      >
        {(placeholder && <option value="" disabled hidden>{placeholder}</option>)}
        {(label && includeLabelInOptions) && <option label={label} />}
        {options && options.map((option, i) => (option.groupLabel
          ? buildOptgroup(option, i)
          : buildOption(option, i)
        ))}
      </select>
      <i className="sage-select__arrow" aria-hidden="true" />
      {label && (
        <label htmlFor={id} className="sage-select__label">{label}</label>
      )}
      {message && (
        <div className="sage-select__info">
          <div className="sage-select__message">{message}</div>
        </div>
      )}
    </div>
  );
};

Select.defaultProps = {
  className: null,
  disabled: false,
  hasError: false,
  includeLabelInOptions: false,
  label: null,
  message: null,
  onChange: (evt) => evt,
  options: [],
  placeholder: null,
  required: false,
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
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
          disabled: PropTypes.bool,
        }),
      ]),
      PropTypes.shape({
        disabled: PropTypes.bool,
        groupLabel: PropTypes.string,
        groupOptions: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
              label: PropTypes.string,
              value: PropTypes.string,
              disabled: PropTypes.bool,
            }),
          ]),
        ),
      }),
    ]),
  ),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
};
