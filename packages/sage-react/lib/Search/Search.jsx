import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Search = ({
  contained,
  placeholder,
  className,
  value,
  onChange,
  ...rest
}) => {
  const classNames = classnames(
    'sage-search',
    className,
    {
      'sage-search--contained': contained
    }
  );

  return (
    <div className={classNames}>
      <input
        className="sage-search__input"
        type="search"
        onChange={onChange}
        placeholder={`${placeholder}…`}
        value={value}
        // Prevents the default Kajabi-Products Search.js from binding to this input
        data-kjb-disable-search
        {...rest}
      />
    </div>
  );
};

Search.defaultProps = {
  contained: false,
  placeholder: 'Search',
  className: null,
};

Search.propTypes = {
  contained: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
