import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Textarea = ({
  className,
  hasError,
  id,
  label,
  message,
  onChange,
  value,
  ...rest
}) => {
  const [fieldValue, updateFieldValue] = useState(null);
  const classNames = classnames(
    'sage-textarea',
    className,
    {
      'sage-textarea--error': hasError,
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
    <div className={classNames}>
      <textarea
        className="sage-textarea__field"
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
        <div className="sage-textarea__message">{message}</div>
      )}
    </div>
  );
};

Textarea.TEST = 'TEST';

Textarea.defaultProps = {
  className: null,
  hasError: false,
  label: null,
  message: null,
  onChange: null,
  value: '',
};

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
