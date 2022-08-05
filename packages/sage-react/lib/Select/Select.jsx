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

  const buildOptgroup = (optgroup, i) => {
    if (optgroup.group_label && optgroup.group_label.length > 0) {
      const optgroupLabel = optgroup.group_label;
      const optgroupDisabled = optgroup.disabled;
      return (
        <optgroup
          label={optgroupLabel}
          disabled={optgroupDisabled}
          key={optgroupLabel + i.toString()}
        >
          {optgroup.group_options.map((option, i) => (buildOption(option, i)))}
        </optgroup>
      );
    }
  };

  const buildOptions = (option, i) => {
    if (option.group_label && option.group_label.length > 0) {
      return buildOptgroup(option, i);
    }
    return buildOption(option, i);
  };

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

        {(options
          && options.map((option, i) => (
            buildOptions(option, i)
          ))
        )}
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
  options: PropTypes.arrayOf(selectItemPropTypes).isRequired,
  value: PropTypes.string,
};
