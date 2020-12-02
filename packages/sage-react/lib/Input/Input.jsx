import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Input = ({
  className,
  hasError,
  id,
  label,
  message,
  onChange,
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
      'sage-input--error': hasError,
      'sage-input--prefixed': prefix,
      'sage-input--suffixed': suffix,
      'sage-input--standalone': standalone,
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
  }, [inputStyles, prefix, prefixRef, suffix, suffixRef]);

  return (
    <div className={classNames}>
      <input
        className="sage-input__field"
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
          ref={prefixRef}
          className="sage-input__affix sage-input__affix--prefix sage-label sage-label--draft"
          aria-label={`Prefixed with ${prefix}`}
        >
          {prefix}
        </span>
      )}
      {suffix && (
        <span
          ref={suffixRef}
          className="sage-input__affix sage-input__affix--suffix sage-label sage-label--draft"
          aria-label={`Suffixed with ${suffix}`}
        >
          {suffix}
        </span>
      )}
      {message && (
        <div className="sage-input__message">{message}</div>
      )}
    </div>
  );
};

Input.defaultProps = {
  className: null,
  hasError: false,
  label: null,
  message: null,
  onChange: null,
  prefix: null,
  standalone: false,
  suffix: null,
  value: '',
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  onChange: PropTypes.func,
  prefix: PropTypes.string,
  standalone: PropTypes.bool,
  suffix: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
