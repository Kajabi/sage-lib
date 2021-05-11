import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { TOAST_TYPES } from './configs';

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
        <svg className="sage-toast__spinner" aria-hidden="true" viewBox="25 25 50 50">
          <circle className="sage-toast__spinner-path" cx="50" cy="50" r="20" fill="none" stroke="0072EF" strokeWidth="4" />
        </svg>
      );
    } else if (icon) {
      return (
        <Icon className="sage-toast__icon" icon={icon} />
      );
    }
  };

  return !isDismissed && (
    <div className="sage-toast-container">
      <dialog open className={classNames} aria-labelledby={`sage-toast-label-${id}`}>
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
          className="sage-toast__button sage-toast__button--close"
          onClick={onClickDismiss}
        >
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
