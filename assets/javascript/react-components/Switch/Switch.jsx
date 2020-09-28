import React from 'react';
import PropTypes from 'prop-types';

const SageSwitch = (props) => {
  const {
    id,
    type,
    title,
    isChecked,
    isDisabled,
    value,
    err,
    onUpdate
  } = props;

  const onChange = (e) => {
    const newValue = e.target.value;

    if (onUpdate) {
      onUpdate(newValue, isChecked, e);
    }
  };

  return (
    <div className="sage-switch">
      <input
        id={id}
        type={type}
        name={id}
        className="sage-switch__input"
        checked={isChecked}
        disabled={isDisabled}
        value={value}
        required={err}
        onChange={onChange}
      />
      <label className="sage-switch__label" htmlFor={id}>{title}</label>
    </div>
  );
};

SageSwitch.defaultProps = {
  id: null,
  isChecked: true,
  isDisabled: false,
  value: null,
  err: false,
  onUpdate: () => {}
};

SageSwitch.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.string,
  err: PropTypes.bool,
  onUpdate: PropTypes.func
};

export default SageSwitch;
