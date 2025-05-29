import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Search } from '../Search';

export const DropdownItemSearch = ({
  onChangeSearchTerms,
  onEnter,
  placeholder,
  selectedValue,
  ...rest
}) => {
  const [value, updateValue] = useState('');

  useEffect(() => {
    if (selectedValue) {
      updateValue(selectedValue);
    }
  }, [selectedValue]);

  const onChange = (e) => {
    updateValue(e.target.value);
    onChangeSearchTerms(e.target.value);
  };

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onEnter(e.target.value);
    }
  };

  return (
    <Search
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      role="none"
      {...rest}
    />
  );
};

DropdownItemSearch.defaultProps = {
  onChangeSearchTerms: (evt) => evt,
  onEnter: (evt) => evt,
  placeholder: 'Find',
  selectedValue: '',
};

DropdownItemSearch.propTypes = {
  onChangeSearchTerms: PropTypes.func,
  onEnter: PropTypes.func,
  placeholder: PropTypes.string,
  selectedValue: PropTypes.string,
};
