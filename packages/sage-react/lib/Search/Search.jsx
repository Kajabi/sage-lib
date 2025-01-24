import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { SageTokens, SageClassnames } from '../configs';

export const Search = React.forwardRef(({
  className,
  contained,
  disabled,
  hideLabel,
  id,
  label,
  onClear,
  onChange,
  placeholder,
  kjbElementId,
  value,
  ...rest
}, ref) => {
  const classNames = classnames(
    'sage-search',
    className,
    {
      'sage-search--contained': contained,
      'sage-search--has-text': value.length > 0,
    }
  );

  const labelClassnames = classnames(
    'sage-search__label',
    className,
    {
      'visually-hidden': hideLabel,
    });

  return (
    <div data-kjb-element={kjbElementId} className={classNames}>
      {label && (
        <label htmlFor={id} className={labelClassnames}>
          {label}
        </label>
      )}
      <div className="sage-search__field-wrapper">
        <pds-icon
          name="search-small"
          class={SageClassnames.SPACERS.SM_LEFT}
          color={SageTokens.COLOR_PALETTE.GREY_700}
          style={{ zIndex: '2' }}
        />
        <input
          ref={ref}
          className="sage-search__input"
          type="search"
          onChange={onChange}
          disabled={disabled}
          id={id}
          placeholder={`${placeholder}…`}
          value={value}
          // Prevents the default Kajabi-Products Search.js from binding to this input
          data-kjb-disable-search
          {...rest}
        />
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
    </div>
  );
});

Search.defaultProps = {
  className: null,
  contained: false,
  disabled: false,
  hideLabel: false,
  onClear: null,
  placeholder: 'Search',
  kjbElementId: null,
};

Search.propTypes = {
  className: PropTypes.string,
  contained: PropTypes.bool,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  kjbElementId: PropTypes.string,
  value: PropTypes.string.isRequired,
};
