import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ id, title, isChecked, isDisabled, onUpdate }) => {
  const onChange = (e) => {
    const { value: changedValue } = e.target;

    if (onUpdate) {
      onUpdate(changedValue, isChecked, e);
    }
  };

  return (
    <div className="sage-radio">
      <input
        className="sage-radio__input"
        type="radio"
        id={id}
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <label className="sage-radio__label" htmlFor={id}>{title}</label>
    </div>
  );
};

Radio.defaultProps = {
  id: null,
  isChecked: false,
  isDisabled: false,
  onUpdate: null
};

Radio.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onUpdate: PropTypes.func
};

export default Radio;
