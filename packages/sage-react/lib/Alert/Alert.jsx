import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ALERT_COLORS, ALERT_PRIMARY_ACTION_CLASSNAME } from './configs';
import { SageTokens } from '../configs';
import { TestIds } from '../automationTestIds';

export const Alert = ({
  actions,
  className,
  color,
  description,
  dismissable,
  icon,
  onDismiss,
  small,
  testId,
  title,
  titleAddon,
  ...rest
}) => {
  const [selfDismissed, setSelfDismissed] = useState(false);

  const classNames = classnames(
    'sage-alert',
    className,
    {
      [`sage-alert--${color}`]: color,
      'sage-alert--dismissable': dismissable,
      'sage-alert--small': small,
      'sage-alert--actions': actions !== null,
    }
  );

  const handleDismiss = () => {
    setSelfDismissed(true);
    if (onDismiss) onDismiss();
  };

  const getDefaultIcon = () => {
    switch (color) {
      case ALERT_COLORS.WARNING:
        return SageTokens.ICONS.DANGER_FILLED;
      case ALERT_COLORS.APPROACHING:
        return SageTokens.ICONS.DANGER_FILLED;
      case ALERT_COLORS.DANGER:
        return SageTokens.ICONS.WARNING_FILLED;
      case ALERT_COLORS.EXCEEDED:
        return SageTokens.ICONS.WARNING_FILLED;
      case ALERT_COLORS.REACHED:
        return SageTokens.ICONS.FLAG;
      case ALERT_COLORS.SUCCESS:
        return SageTokens.ICONS.CHECK_CIRCLE_FILLED;
      case ALERT_COLORS.INFO:
      default:
        return SageTokens.ICONS.INFO_CIRCLE_FILLED;
    }
  };

  return !selfDismissed ? (
    <div className={classNames} {...rest} data-kjb-element={testId}>
      <Icon icon={icon || getDefaultIcon()} className="sage-alert__icon" testId={TestIds.alertIcon} />
      <div className="sage-alert__copy">
        {title && (
          <h3 className="sage-alert__title" data-kjb-element={TestIds.alertTitle}>
            {title}
            <span className="sage-alert__title--add-on"> {titleAddon}</span>
          </h3>
        )}
        {description && (
          <p className="sage-alert__desc" data-kjb-element={TestIds.alertDescripton}>{description}</p>
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
            color={Button.COLORS.PRIMARY}
            icon={SageTokens.ICONS.REMOVE}
            iconOnly={true}
            subtle={true}
            value="Close"
            onClick={handleDismiss}
            aria-label="Close Alert"
            testId="closeButton"
          />
        </div>
      )}
    </div>
  ) : null;
};

Alert.COLORS = ALERT_COLORS;
Alert.PRIMARY_ACTION_CLASSNAME = ALERT_PRIMARY_ACTION_CLASSNAME;

Alert.defaultProps = {
  actions: null,
  className: '',
  description: null,
  dismissable: false,
  icon: null,
  onDismiss: null,
  small: false,
  testId: null,
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
  testId: PropTypes.string,
  title: PropTypes.string,
  titleAddon: PropTypes.string,
};
