import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Textarea = ({
  className,
  disabled,
  hasError,
  id,
  label,
  message,
  onChange,
  testId,
  value,
  ...rest
}) => {
  const [fieldValue, updateFieldValue] = useState(null);
  const classNames = classnames(
    'sage-textarea',
    className,
    {
      'sage-form-field--error': hasError,
    }
  );

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    } else {
      updateFieldValue(e.target.value);
    }
  };

  return (
    <div className={classNames} data-kjb-element={testId}>
      <textarea
        className="sage-textarea__field"
        disabled={disabled}
        id={id}
        onChange={handleChange}
        placeholder={label}
        value={fieldValue || value}
        {...rest}
      />
      {label && (
        <label htmlFor={id} className="sage-textarea__label">{label}</label>
      )}
      {message && (
        <div className="sage-textarea__info">
          <div className="sage-textarea__message">{message}</div>
        </div>
      )}
    </div>
  );
};

Textarea.TEST = 'TEST';

Textarea.defaultProps = {
  className: null,
  disabled: false,
  hasError: false,
  label: null,
  message: null,
  onChange: null,
  testId: null,
  value: '',
};

Textarea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  onChange: PropTypes.func,
  testId: PropTypes.string,
  value: PropTypes.string,
};
