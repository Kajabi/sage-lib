import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
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
  optGroups,
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

  const buildOptions = (opts) => (
    opts.map((option, i) => {
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
    })
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

        if (!isEmpty(optGroups)) {
          optGroups.map((group) => (
            <optgroup label={group.label} disabled={group.disabled}>
              {buildOptions(group.options)}
            </optgroup>
          ))
        }

        if (!isEmpty(options)) {
          buildOptions(options)
        }
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
  options: [],
  optGroups: [],
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
  optGroups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      options: PropTypes.arrayOf(selectItemPropTypes),
    }),
  ),
  options: PropTypes.arrayOf(selectItemPropTypes),
  value: PropTypes.string,
};
