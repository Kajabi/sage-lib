import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';
import {
  INPUT_MODE,
  INPUT_TYPE
} from './configs';

/* eslint-disable react-hooks/exhaustive-deps */

export const Input = React.forwardRef(({
  autocomplete,
  className,
  disabled,
  hasError,
  hasPlaceholder,
  hideLabel,
  icon,
  id,
  inputMode,
  inputType,
  label,
  max,
  maxLength,
  message,
  min,
  minLength,
  name,
  onChange,
  pattern,
  placeholder,
  popover,
  prefix,
  readonly,
  required,
  standalone,
  step,
  suffix,
  kjbElementId,
  value,
  ...rest
}, ref) => {
  const inputPaddingOffset = 16;
  const [fieldValue, updateFieldValue] = useState(null);
  const [inputStyles, updateStyles] = useState(rest.style || {});

  const classNames = classnames(
    'sage-input',
    className,
    {
      'sage-form-field--error': hasError,
      'sage-input--prefixed': prefix,
      'sage-input--suffixed': suffix,
      'sage-input--standalone': standalone,
      'sage-input--has-icon': icon,
      'sage-input--has-popover': popover,
    }
  );

  const prefixRef = useRef(null);
  const suffixRef = useRef(null);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    } else {
      updateFieldValue(e.target.value);
    }
  };

  const labelClassnames = classnames(
    'sage-input__label',
    className,
    {
      'visually-hidden': hideLabel,
    });

  const setPlaceholder = () => {
    if (placeholder) {
      return placeholder;
    }
    return label;
  };

  useEffect(() => {
    const newInputStyles = {
      ...inputStyles,
      paddingLeft: inputPaddingOffset,
      paddingRight: inputPaddingOffset,
    };

    let affixUpdatesNeeded = false;

    if (prefix) {
      newInputStyles.paddingLeft = inputPaddingOffset + prefixRef.current.offsetWidth;
      affixUpdatesNeeded = true;
    }

    if (suffix) {
      newInputStyles.paddingRight = inputPaddingOffset + suffixRef.current.offsetWidth;
      affixUpdatesNeeded = true;
    }

    if (affixUpdatesNeeded) {
      updateStyles(newInputStyles);
    }
  }, [prefix, suffix]);

  return (
    <div className={classNames} data-kjb-element={kjbElementId}>
      <input
        autoComplete={autocomplete}
        className="sage-form-field sage-input__field"
        disabled={disabled}
        id={id}
        inputMode={inputMode}
        type={inputType}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        name={name}
        onChange={handleChange}
        pattern={pattern}
        placeholder={setPlaceholder()}
        readOnly={readonly}
        ref={ref}
        required={required}
        step={step}
        style={inputStyles}
        value={fieldValue || value}
        {...rest}
      />
      {label && (
        <label htmlFor={id} className={labelClassnames}>
          {label}
        </label>
      )}
      {prefix && (
        <span
          aria-label={`prefixed with ${prefix}`}
          className="sage-input__affix sage-input__affix--prefix"
          ref={prefixRef}
        >
          <span className="sage-input__affix-value">{prefix}</span>
        </span>
      )}
      {suffix && (
        <span
          aria-label={`suffixed with ${suffix}`}
          className="sage-input__affix sage-input__affix--suffix"
          ref={suffixRef}
        >
          <span className="sage-input__affix-value">{suffix}</span>
        </span>
      )}
      {icon && (
        <div className="sage-input__icon">
          <Icon icon={icon} />
        </div>
      )}
      {message && (
        <div className="sage-input__info">
          <div className="sage-input__message">{message}</div>
        </div>
      )}
      {popover}
    </div>
  );
});
Input.Mode = INPUT_MODE;
Input.Type = INPUT_TYPE;

Input.defaultProps = {
  autocomplete: null,
  className: null,
  disabled: false,
  hasError: false,
  hasPlaceholder: false,
  hideLabel: false,
  icon: null,
  inputMode: null,
  inputType: null,
  label: null,
  max: null,
  maxLength: null,
  message: null,
  min: null,
  minLength: null,
  name: null,
  onChange: null,
  pattern: null,
  placeholder: null,
  popover: null,
  prefix: null,
  readonly: false,
  required: false,
  standalone: false,
  step: null,
  suffix: null,
  kjbElementId: null,
  value: '',
};

Input.propTypes = {
  autocomplete: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  hasPlaceholder: PropTypes.bool,
  hideLabel: PropTypes.bool,
  inputMode: PropTypes.oneOf(Object.values(Input.Mode)),
  inputType: PropTypes.oneOf(Object.values(Input.Type)),
  label: PropTypes.string,
  max: PropTypes.string,
  maxLength: PropTypes.string,
  min: PropTypes.string,
  minLength: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  popover: PropTypes.node,
  prefix: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  standalone: PropTypes.bool,
  step: PropTypes.string,
  suffix: PropTypes.string,
  kjbElementId: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
