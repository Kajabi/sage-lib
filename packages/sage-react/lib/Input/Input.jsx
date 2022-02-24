import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';

export const Input = ({
  className,
  disabled,
  hasError,
  hasPlaceholder,
  icon,
  id,
  label,
  max,
  maxLength,
  message,
  min,
  minLength,
  onChange,
  pattern,
  popover,
  prefix,
  readOnly,
  standalone,
  step,
  suffix,
  value,
  ...rest
}) => {
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
    <div className={classNames}>
      <input
        className="sage-form-field sage-input__field"
        disabled={disabled}
        id={id}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        onChange={handleChange}
        pattern={pattern}
        placeholder={label}
        readOnly={readOnly}
        step={step}
        style={inputStyles}
        value={fieldValue || value}
        {...rest}
      />
      {label && (
        <label htmlFor={id} className="sage-input__label">
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
        <div className="sage-input__message">{message}</div>
      )}
      {popover}
    </div>
  );
};

Input.defaultProps = {
  className: null,
  disabled: false,
  hasError: false,
  hasPlaceholder: false,
  icon: null,
  label: null,
  max: null,
  maxLength: null,
  message: null,
  min: null,
  minLength: null,
  onChange: null,
  pattern: null,
  popover: null,
  prefix: null,
  readOnly: false,
  standalone: false,
  suffix: null,
  value: '',
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  hasPlaceholder: PropTypes.bool,
  label: PropTypes.string,
  max: PropTypes.string,
  maxLength: PropTypes.string,
  message: PropTypes.string,
  min: PropTypes.string,
  minLength: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  popover: PropTypes.node,
  prefix: PropTypes.string,
  readOnly: PropTypes.bool,
  standalone: PropTypes.bool,
  step: PropTypes.string,
  suffix: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
