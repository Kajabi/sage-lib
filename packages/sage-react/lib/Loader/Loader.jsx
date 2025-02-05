import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LOADER_TYPES } from './configs';
import { SageTokens } from '../configs';

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
          viewBox="0 0 200 200"
          fill="none"
          color={SageTokens.COLOR_PALETTE.MERCURY_400}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sage-loader__spinner-secondHalf">
              <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
              <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
            </linearGradient>
            <linearGradient id="sage-loader__spinner-firstHalf">
              <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
              <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <g>
            <path className="sage-loader__spinner-path sage-loader__spinner--loading-button sage-loader__spinner-secondHalf" d="M 4 100 A 96 96 0 0 1 196 100" />
            <path className="sage-loader__spinner-path sage-loader__spinner--loading-button sage-loader__spinner-firstHalf" d="M 196 100 A 96 96 0 0 1 4 100" />
            <path className="sage-loader__spinner-path sage-loader__spinner--loading-button sage-loader__spinner-highlight" d="M 4 100 A 96 96 0 0 1 4 98" />
          </g>
        </svg>
      )}
      {(type === LOADER_TYPES.SPINNER) && (
        <svg
          className="sage-loader__spinner"
          viewBox="0 0 200 200"
          fill="none"
          color={SageTokens.COLOR_PALETTE.MERCURY_400}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sage-loader__spinner-secondHalf">
              <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
              <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
            </linearGradient>
            <linearGradient id="sage-loader__spinner-firstHalf">
              <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
              <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <g>
            <path className="sage-loader__spinner-path sage-loader__spinner-secondHalf" d="M 4 100 A 96 96 0 0 1 196 100" />
            <path className="sage-loader__spinner-path sage-loader__spinner-firstHalf" d="M 196 100 A 96 96 0 0 1 4 100" />
            <path className="sage-loader__spinner-path sage-loader__spinner-highlight" d="M 4 100 A 96 96 0 0 1 4 98" />
          </g>
        </svg>
      )}
      {(type === LOADER_TYPES.SUCCESS) && (
        <svg className="sage-loader__success" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="21" fill="#6b62f2" /><path fillRule="evenodd" clipRule="evenodd" d="M34.707 17.293a1 1 0 0 1 0 1.414l-13 13a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L21 29.586l12.293-12.293a1 1 0 0 1 1.414 0Z" fill="#fff" /></svg>
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
