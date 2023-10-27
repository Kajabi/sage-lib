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
      {(type === LOADER_TYPES.SPINNER_IN_BUTTON) && (
        <svg
          className="sage-loader__spinner sage-loader__spinner--loading-button"
          viewBox="25 25 50 50"
          aria-hidden="true"
        >
          <circle
            className="sage-loader__spinner-path sage-loader__spinner-path--loading-button"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="0072EF"
            strokeWidth="4"
          />
        </svg>
      )}
      {(type === LOADER_TYPES.SPINNER) && (
        <svg
          className="sage-loader__spinner"
          viewBox="25 25 50 50"
        >
          <circle
            className="sage-loader__spinner-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="0072EF"
            strokeWidth="2"
          />
        </svg>
      )}
      {(type === LOADER_TYPES.SUCCESS) && (
        <svg className="sage-loader__success" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="21" fill="#0072EF" /><path fillRule="evenodd" clipRule="evenodd" d="M34.707 17.293a1 1 0 0 1 0 1.414l-13 13a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L21 29.586l12.293-12.293a1 1 0 0 1 1.414 0Z" fill="#fff" /></svg>
      )}
      {(type === LOADER_TYPES.TYPING) && (
        <div className="sage-loader__typing">
          <span />
          <span />
          <span />
        </div>
      )}
      {label ? (
        <p className="sage-loader__text t-sage-body-small">{label}</p>
      ) : (
        <span className="visually-hidden">{label}</span>
      )}
    </div>
  );
};

Loader.TYPES = LOADER_TYPES;

Loader.defaultProps = {
  className: '',
  fillSpace: false,
  label: 'Loading...',
  hideWhenDone: true,
  type: Loader.TYPES.SPINNER,
};

Loader.propTypes = {
  /**
   * The name of the class you want to apply to the loader.
   */
  className: PropTypes.string,
  /**
   * If true, will fill the space within the container.
   */
  fillSpace: PropTypes.bool,
  /**
   * If true, will hide the loader when loading is false.
   */
  hideWhenDone: PropTypes.bool,
  /**
   * The text that aligns with the loader.
   */
  label: PropTypes.string,
  /**
   * If true, it will display the loader.
   */
  loading: PropTypes.bool.isRequired,
  /**
   * The type of Loader to be rendered
   */
  type: PropTypes.oneOf(Object.values(Loader.TYPES)),
};
