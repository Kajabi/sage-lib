import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LOADER_SHAPES } from './configs';

const Loader = ({
  fillSpace,
  hideWhenDone,
  label,
  loading,
  shape,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-loader',
    className,
    {
      'sage-loader--fill': fillSpace,
      [`sage-loader--${shape}`]: shape,
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
        (shape === LOADER_SHAPES.SPINNER )
        && (
        <svg class="spinner" viewBox="25 25 50 50" >
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stop-color="#0072EF"/>
              <stop offset="100%" stop-color="#4fc9c5"/>
            </linearGradient>
          </defs>
          <circle class="spinner-path" cx="50" cy="50" r="20" fill="none" stroke="url(#linear)" stroke-width="4" />
        </svg>
      )}
      <span class="visually-hidden">{label}</span>
    </div>
  );
};

Loader.SHAPES = LOADER_SHAPES;

Loader.defaultProps = {
  className: '',
  fillSpace: false,
  label: 'Loading content',
  hideWhenDone: true,
  shape: LOADER_SHAPES.BAR,
};

Loader.propTypes = {
  className: PropTypes.string,
  fillSpace: PropTypes.bool,
  hideWhenDone: PropTypes.bool,
  label: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  shape: PropTypes.oneOf(Object.values(LOADER_SHAPES)),
};

export default Loader;
