import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const Search = ({
  className,
  contained,
  onClear,
  onChange,
  placeholder,
  value,
  ...rest
}) => {
  const classNames = classnames(
    'sage-search',
    className,
    {
      'sage-search--contained': contained,
      'sage-search--has-text': value.length > 0,
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
      <label className="sage-search__label">
        {placeholder}
      </label>
      {onClear && (
        <Button
          className="sage-search__reset-button"
          color={Button.COLORS.SECONDARY}
          icon={SageTokens.ICONS.REMOVE}
          iconOnly={true}
          onClick={onClear}
          subtle={true}
        >
          Clear Search Input
        </Button>
      )}
    </div>
  );
};

Search.defaultProps = {
  className: null,
  contained: false,
  onClear: null,
  placeholder: 'Search',
};

Search.propTypes = {
  className: PropTypes.string,
  contained: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};
