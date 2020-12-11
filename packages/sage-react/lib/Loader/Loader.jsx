import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LOADER_TYPES } from './configs';

const Loader = ({
  fillSpace,
  hideWhenDone,
  label,
  loading,
  type,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-loader',
    className,
    {
      'sage-loader--fill': fillSpace,
      [`sage-loader--${type}`]: type,
      'visually-hidden': !loading && hideWhenDone,
    }
  );

  const ariaAttrs = {
    'aria-hidden': !loading,
    'aria-busy': true,
    'aria-live': "polite"
  };

  return (
    <div className={classNames} data-loading={loading} {...ariaAttrs} {...rest}>
      {
        (type === LOADER_TYPES.SPINNER )
        && (
        <svg class="sage-loader__spinner" viewBox="25 25 50 50" >
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stop-color="#0072EF"/>
              <stop offset="100%" stop-color="#4fc9c5"/>
            </linearGradient>
          </defs>
          <circle class="sage-loader__spinner-path" cx="50" cy="50" r="20" fill="none" stroke="url(#linear)" stroke-width="4" />
        </svg>
      )}
      <span class="visually-hidden">{label}</span>
    </div>
  );
};

Loader.TYPES = LOADER_TYPES;

Loader.defaultProps = {
  className: '',
  fillSpace: false,
  label: 'Loading content',
  hideWhenDone: true,
  type: LOADER_TYPES.BAR,
};

Loader.propTypes = {
  className: PropTypes.string,
  fillSpace: PropTypes.bool,
  hideWhenDone: PropTypes.bool,
  label: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(Object.values(LOADER_TYPES)),
};

export default Loader;
