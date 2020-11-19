import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { selectItemPropTypes, selectStructuredItemPropTypes } from './configs';

const Select = ({
  className,
  hasError,
  id,
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
      'sage-select--error': hasError,
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
        {...rest}
      >
        {label && <option label={label} />}

        {options.map((option, i) => {
          let optionLabel,
            optionValue;
          if (typeof option === 'string') {
            optionLabel = option;
            optionValue = option;
          } else {
            optionLabel = option.label;
            optionValue = option.value;
          }

          return (
            <option key={i.toString()} value={optionValue}>{optionLabel}</option>
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
  hasError: false,
  label: null,
  message: null,
  onChange: e => e,
  options: [],
  value: null,
};

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(selectItemPropTypes),
  value: PropTypes.string,
};

export default Select;
