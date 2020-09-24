import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, title, isChecked, isDisabled, onUpdate }) => {
  const onChange = (e) => {
    const { value: changedValue } = e.target;

    if (onUpdate) {
      onUpdate(changedValue, isChecked, e);
    }
  };

  return (
    <div className="sage-checkbox">
      <input
        className="sage-checkbox__input"
        type="checkbox"
        id={id}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <label className="sage-checkbox__label" htmlFor={id}>{title}</label>
    </div>
  );
};

Checkbox.defaultProps = {
  id: null,
  isChecked: false,
  isDisabled: false,
  onUpdate: null,
};

Checkbox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default Checkbox;
