import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';

export const Input = ({
  className,
  hasError,
  icon,
  id,
  label,
  message,
  onChange,
  popover,
  prefix,
  standalone,
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
        id={id}
        onChange={handleChange}
        placeholder={label}
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
          aria-label={`Suffixed with ${suffix}`}
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
  hasError: false,
  icon: null,
  label: null,
  message: null,
  onChange: null,
  popover: null,
  prefix: null,
  standalone: false,
  suffix: null,
  value: '',
};

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  onChange: PropTypes.func,
  popover: PropTypes.node,
  prefix: PropTypes.string,
  standalone: PropTypes.bool,
  suffix: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
