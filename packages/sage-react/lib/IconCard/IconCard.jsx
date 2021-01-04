import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import Label from '../Label';
import { SageTokens } from '../configs';

const IconCard = ({
  className,
  color,
  icon,
  label,
  size,
  style,
  ...rest
}) => {
  const classNames = classnames(
    'sage-icon-card',
    className,
    {
      [`sage-icon-card--${color}`]: color && !style,
      [`sage-icon-card--${color}-${style}`]: icon && style,
    }
  );

  return (
    <div
      className={classNames}
      aria-hidden="true"
      role="presentation"
      {...rest}
    >
      <Icon icon={icon} size={size} label={label} />
    </div>
  );
};

IconCard.COLORS = { ...Label.COLORS };
IconCard.ICONS = { ...SageTokens.ICONS };
IconCard.SIZES = { ...Icon.SIZES };
IconCard.STYLES = { ...Label.STYLES };

IconCard.defaultProps = {
  className: null,
  color: Label.COLORS.DRAFT,
  label: null,
  size: Icon.SIZES.XXXL,
  style: null,
};

IconCard.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Label.COLORS)),
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)).isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Icon.SIZES)),
  style: PropTypes.oneOf(Object.values(Label.STYLES)),
};

export default IconCard;
