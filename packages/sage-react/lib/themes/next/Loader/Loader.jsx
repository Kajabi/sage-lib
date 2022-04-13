import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LOADER_TYPES } from './configs';

export const Loader = ({
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
    'aria-live': 'polite',
  };

  return (
    <div className={classNames} data-loading={loading} {...ariaAttrs} {...rest}>
      {(type === LOADER_TYPES.SPINNER) && (
        <svg className="sage-loader__spinner" viewBox="25 25 50 50">
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0072EF" />
              <stop offset="100%" stopColor="#86d5bc" />
            </linearGradient>
          </defs>
          <circle className="sage-loader__spinner-path" cx="50" cy="50" r="20" fill="none" stroke="url(#linear)" strokeWidth="4" />
        </svg>
      )}
      {(type === LOADER_TYPES.SUCCESS) && (
        <svg className="sage-loader__success" viewBox="25 25 50 50">
          <circle className="sage-loader__success-path" cx="50" cy="50" r="20" fill="none" stroke="0072EF" strokeWidth="4" />
          <path className="sage-loader__success-check" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M22.7071 1.29291C23.0976 1.68344 23.0976 2.3166 22.7071 2.70713L9.7071 15.7071C9.31658 16.0977 8.68341 16.0977 8.29289 15.7071L1.29289 8.70713C0.902365 8.3166 0.902365 7.68344 1.29289 7.29291C1.68341 6.90239 2.31658 6.90239 2.7071 7.29291L9 13.5858L21.2929 1.29291C21.6834 0.902388 22.3166 0.902388 22.7071 1.29291Z" strokeWidth="2" />
        </svg>
      )}
      <span className="visually-hidden">{label}</span>
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
