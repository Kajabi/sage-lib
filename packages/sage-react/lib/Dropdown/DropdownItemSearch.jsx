import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';

const DropdownItemSearch = ({
  onChangeSearchTerms,
  onEnter,
  placeholder,
  selectedValue,
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
    />
  );
};

DropdownItemSearch.defaultProps = {
  onChangeSearchTerms: e => e,
  onEnter: e => e,
  placeholder: 'Search',
  selectedValue: '',
};

DropdownItemSearch.propTypes = {
  onChangeSearchTerms: PropTypes.func,
  onEnter: PropTypes.func,
  placeholder: PropTypes.string,
  selectedValue: PropTypes.string,
};

export default DropdownItemSearch;
