import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ToastFade from './ToastFade';
import Button from '../Button';
import Icon from '../Icon';
import { TOAST_COLORS } from './configs';

const Toast = ({
  className,
  color,
  text,
  isActive,
  onDismiss,
  timeout,
  title,
}) => {
  const [isDismissed, setDismissed] = useState(false);

  const dismiss = (dismissed) => {
    console.log('dismissed', dismissed);
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

  return (
    <ToastFade className={classNames} isDismissed={isDismissed} open aria-labelledby={`sage-toast-label-${id}`}>
      <output aria-live="assertive" className="sage-toast__value" id={`sage-toast-label-${id}`}>
        {text}
      </output>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={Icon.ICONS.REMOVE}
        iconOnly={true}
        onClick={onClickDismiss}
        subtle={true}
      >
        Dismiss message
      </Button>
    </ToastFade>
  );
};

Toast.COLORS = TOAST_COLORS;

Toast.defaultProps = {
  className: null,
  color: TOAST_COLORS.DEFAULT,
  text: null,
  isActive: false,
  onDismiss: e => e,
  timeout: 3000,
};

Toast.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(TOAST_COLORS)),
  text: PropTypes.string,
  isActive: PropTypes.bool,
  onDismiss: PropTypes.func,
  timeout: PropTypes.number,
};

export default Toast;
