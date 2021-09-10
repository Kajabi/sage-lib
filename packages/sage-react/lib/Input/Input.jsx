import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { SageTokens } from '../configs';

export const Input = ({
  children,
  className,
  hasError,
  icon,
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

  let hasPopoverChild = false;
  React.Children.forEach(children, (child) => {
    if (child.type.name === 'Popover') hasPopoverChild = true;
  });

  const classNames = classnames(
    'sage-input',
    className,
    {
      'sage-form-field--error': hasError,
      'sage-input--prefixed': prefix,
      'sage-input--suffixed': suffix,
      'sage-input--standalone': standalone,
      'sage-input--has-icon': icon,
      'sage-input--has-popover': hasPopoverChild,
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
        <Label
          aria-label={`Prefixed with ${prefix}`}
          className="sage-input__affix sage-input__affix--prefix"
          color={Label.COLORS.DRAFT}
          ref={prefixRef}
          value={prefix}
        />
      )}
      {suffix && (
        <Label
          aria-label={`Suffixed with ${suffix}`}
          className="sage-input__affix sage-input__affix--suffix"
          color={Label.COLORS.DRAFT}
          ref={suffixRef}
          value={suffix}
        />
      )}
      {icon && (
        <div className="sage-input__icon">
          <Icon icon={icon} />
        </div>
      )}
      {message && (
        <div className="sage-input__message">{message}</div>
      )}
      {children}
    </div>
  );
};

Input.defaultProps = {
  children: null,
  className: null,
  hasError: false,
  icon: null,
  label: null,
  message: null,
  onChange: null,
  prefix: null,
  standalone: false,
  suffix: null,
  value: '',
};

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
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
