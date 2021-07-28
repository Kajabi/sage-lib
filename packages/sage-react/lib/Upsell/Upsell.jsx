import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';

export const Upsell = ({
  className,
  content,
  icon,
  ...rest
}) => {
  const classNames = classnames(
    'sage-upsell',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      {icon && (
        <Icon
          className="sage-upsell__icon"
          icon={icon}
        />
      )}
      <span className="sage-upsell__content">{content}</span>
    </div>
  );
};

Upsell.defaultProps = {
  className: '',
  icon: null,
};

Upsell.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
};
