import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ALERT_COLORS } from './configs';
import { SageTokens } from '../configs';

export const Alert = ({
  actions,
  className,
  color,
  description,
  dismissable,
  icon,
  onDismiss,
  small,
  title,
  titleAddon,
  ...rest
}) => {
  const [selfDismissed, setSelfDismissed] = useState(false);

  const classNames = classnames(
    'sage-alert',
    className,
    {
      'sage-alert--has-actions': actions,
      [`sage-alert--${color}`]: color,
      'sage-alert--small': small,
    }
  );

  const handleDismiss = () => {
    setSelfDismissed(true);
    if (onDismiss) onDismiss();
  };

  const renderIcon = () => {
    let icon;
    switch (color) {
      case ALERT_COLORS.INFO:
        icon = SageTokens.ICONS.INFO_CIRCLE;
        break;
      case ALERT_COLORS.WARNING:
        icon = SageTokens.ICONS.WARNING;
        break;
      case ALERT_COLORS.APPROACHING:
        icon = SageTokens.ICONS.WARNING;
        break;
      case ALERT_COLORS.DANGER:
        icon = SageTokens.ICONS.DANGER;
        break;
      case ALERT_COLORS.EXCEEDED:
        icon = SageTokens.ICONS.DANGER;
        break;
      case ALERT_COLORS.REACHED:
        icon = SageTokens.ICONS.FLAG;
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

  return !selfDismissed ? (
    <div className={classNames} {...rest}>
      {icon
        ? <Icon icon={icon} className="sage-alert__icon" />
        : renderIcon()}
      <div className="sage-alert__copy">
        {title && (
          <h3 className="sage-alert__title">
            {title}
            <span className="sage-alert__title--add-on"> {titleAddon}</span>
          </h3>
        )}
        {description && (
          <p className="sage-alert__desc">{description}</p>
        )}
      </div>
      {actions && (
        <div className="sage-alert__actions">
          {actions}
        </div>
      )}
      {dismissable && (
        <div className="sage-alert__close">
          <Button
            className="sage-alert__close-btn"
            icon={SageTokens.ICONS.REMOVE}
            iconOnly={true}
            small={true}
            subtle={true}
            value="Close"
            onClick={handleDismiss}
            aria-label="Close Alert"
          />
        </div>
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
  icon: null,
  onDismiss: null,
  small: false,
  title: null,
  titleAddon: null,
};

Alert.propTypes = {
  actions: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ALERT_COLORS)).isRequired,
  description: PropTypes.string,
  dismissable: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  onDismiss: PropTypes.func,
  small: PropTypes.bool,
  title: PropTypes.string,
  titleAddon: PropTypes.string,
};
