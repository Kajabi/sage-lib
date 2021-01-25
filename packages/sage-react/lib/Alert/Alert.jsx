import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';
import { ALERT_COLORS } from './configs';

export const Alert = ({
  actions,
  className,
  color,
  description,
  dismissable,
  raised,
  title,
  ...rest
}) => {
  const [selfDismissed, setSelfDismissed] = useState(false);

  const classNames = classnames(
    'sage-alert',
    className,
    {
      [`sage-alert--${color}`]: color,
      'sage-alert--raised': raised,
    }
  );

  const renderIcon = () => {
    let icon;
    switch (color) {
      case ALERT_COLORS.WARNING:
      case ALERT_COLORS.DANGER:
        icon = SageTokens.ICONS.WARNING;
        break;
      case ALERT_COLORS.INFO:
        icon = SageTokens.ICONS.INFO_CIRCLE;
        break;
      case ALERT_COLORS.SUCCESS:
      default:
        icon = SageTokens.ICONS.CHECK_CIRCLE;
        break;
    }

    return (
      <Icon icon={icon} className="sage-alert__icon" />
    );
  };

  const onClickDismiss = () => {
    setSelfDismissed(true);
  };

  return !selfDismissed ? (
    <div className={classNames} {...rest}>
      {renderIcon()}
      <div className="sage-alert__copy">
        {title && (
          <h3 className="sage-alert__title">{title}</h3>
        )}
        {description && (
          <p className="sage-alert__desc">{description}</p>
        )}
        {actions && (
          <div className="sage-alert__actions">
            {actions}
          </div>
        )}
      </div>
      {dismissable && (
        <button
          aria-label="Close"
          className="sage-alert__close"
          onClick={onClickDismiss}
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  ) : null;
};

Alert.COLORS = ALERT_COLORS;

Alert.defaultProps = {
  actions: null,
  className: '',
  description: null,
  dismissable: false,
  raised: false,
  title: null,
};

Alert.propTypes = {
  actions: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ALERT_COLORS)).isRequired,
  description: PropTypes.string,
  dismissable: PropTypes.bool,
  raised: PropTypes.bool,
  title: PropTypes.string,
};
