import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { TOAST_COLORS } from './configs';

export const Toast = ({
  className,
  color,
  description,
  icon,
  isActive,
  onDismiss,
  timeout,
  link,
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
      [`sage-toast--style-${color}`]: color,
    }
  );

  const id = uuid();

  return !isDismissed && (
    <div className="sage-toast-container">
      <dialog open className={classNames} aria-labelledby={`sage-toast-label-${id}`}>
        {icon && <Icon className="sage-toast__icon" icon={icon} />}

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

Toast.COLORS = TOAST_COLORS;

Toast.defaultProps = {
  className: null,
  color: TOAST_COLORS.DEFAULT,
  description: null,
  icon: null,
  isActive: false,
  onDismiss: (evt) => evt,
  timeout: 4500,
  link: null,
  title: null,
};

Toast.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(TOAST_COLORS)),
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
  title: PropTypes.string,
};
