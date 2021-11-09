import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
  title,
  titleAddon,
  ...rest
}) => {
  const [selfDismissed, setSelfDismissed] = useState(false);

  const classNames = classnames(
    'sage-alert',
    className,
    {
      [`sage-alert--${color}`]: color
    }
  );

  const onClickDismiss = () => {
    setSelfDismissed(true);
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
        {actions && (
          <div className="sage-alert__actions">
            {actions}
          </div>
        )}
      </div>
      {dismissable && (
        <button
          aria-label="Close Alert"
          className="sage-alert__close"
          onClick={onClickDismiss}
          type="button"
        >
          <Icon
            color="charcoal-100"
            icon="remove"
            size="md"
          />
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
  icon: null,
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
  title: PropTypes.string,
  titleAddon: PropTypes.string,
};
