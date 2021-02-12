import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { SageTokens } from '../configs';

export const IconCard = ({
  className,
  color,
  icon,
  label,
  size,
  ...rest
}) => {
  const classNames = classnames(
    'sage-icon-card',
    className,
    {
      [`sage-icon-card--${color}`]: color,
    }
  );

  return (
    <div
      className={classNames}
      {...rest}
    >
      <Icon icon={icon} size={size} label={label} />
    </div>
  );
};

IconCard.COLORS = { ...Label.COLORS };
IconCard.ICONS = { ...SageTokens.ICONS };
IconCard.SIZES = { ...Icon.SIZES };

IconCard.defaultProps = {
  className: null,
  color: Label.COLORS.DRAFT,
  label: null,
  size: Icon.SIZES.XXXL,
};

IconCard.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Label.COLORS)),
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)).isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Icon.SIZES)),
};
