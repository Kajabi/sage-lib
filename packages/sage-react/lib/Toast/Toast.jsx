import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { TOAST_TYPES } from './configs';

/* eslint-disable react-hooks/exhaustive-deps */

export const Toast = ({
  className,
  description,
  icon,
  isActive,
  onDismiss,
  timeout,
  link,
  type,
  title,
  ...rest
}) => {
  const [isDismissed, setDismissed] = useState(!isActive);

  const dismiss = (dismissed) => {
    if (dismissed) {
      if (onDismiss) {
        onDismiss();
      }

      setDismissed(true);
    } else {
      setDismissed(false);
    }
  };

  const onClickDismiss = () => {
    dismiss(true);
  };

  // Auto dismiss when applicable
  useEffect(() => {
    if (timeout && isActive) {
      setTimeout(() => {
        dismiss(true);
      }, timeout);
    }
  }, [timeout, isActive]);

  // Toggle dismissed when isActive changes
  useEffect(() => {
    dismiss(!isActive);
  }, [isActive]);

  const classNames = classnames(
    'sage-toast',
    className,
    {
      [`sage-toast--style-${type}`]: type,
    }
  );

  const id = uuid();

  const renderAsset = () => {
    if (type === Toast.TYPES.LOADING) {
      return (
        <svg className="sage-loader__spinner sage-loader__spinner--loading-button" aria-hidden="true" viewBox="25 25 50 50">
          <circle className="sage-loader__spinner sage-loader__spinner-path sage-loader__spinner-path--loading-button" cx="50" cy="50" r="20" fill="none" stroke="0072EF" strokeWidth="4" />
        </svg>
      );
    }
    if (icon) {
      return (
        <Icon className="sage-toast__icon" icon={icon} />
      );
    }
    return false;
  };

  return !isDismissed && (
    <div className="sage-toast-container">
      <dialog open className={classNames} aria-labelledby={`sage-toast-label-${id}`} {...rest}>
        {renderAsset()}

        <output
          className="sage-toast__value"
          id={`sage-toast-label-${id}`}
          aria-live="assertive"
          aria-atomic="true"
        >
          {title} {description}
        </output>

        {link && (
          <a
            href={link.href}
            className="sage-toast__button sage-toast__button--underline"
          >
            {link.text}
          </a>
        )}

        <button
          type="button"
          className="sage-toast__button sage-toast__button--close sage-btn sage-btn--subtle sage-btn--secondary sage-btn--icon-only-remove"
          onClick={onClickDismiss}
        >
          <pds-icon name="remove" />
          <span className="visually-hidden">
            Dismiss message
          </span>
        </button>
      </dialog>
    </div>
  );
};

Toast.TYPES = TOAST_TYPES;

Toast.defaultProps = {
  className: null,
  description: null,
  icon: null,
  isActive: false,
  onDismiss: (evt) => evt,
  timeout: 4500,
  link: null,
  title: null,
  type: Toast.TYPES.DEFAULT,
};

Toast.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isActive: PropTypes.bool,
  onDismiss: PropTypes.func,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([false]),
  ]),
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
  type: PropTypes.oneOf(Object.values(Toast.TYPES)),
  title: PropTypes.string,
};
