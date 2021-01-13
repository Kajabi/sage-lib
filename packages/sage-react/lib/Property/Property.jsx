import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Icon,
  SageTokens,
} from '..';
import PropertyGroup from './PropertyGroup';

const Property = ({
  children,
  className,
  icon,
  ...rest
}) => {
  const classNames = classnames(
    'sage-property',
    className,
  );

  return (
    <span className={classNames} {...rest}>
      {icon && (
        <Icon icon={icon} className="sage-property__icon" />
      )}
      {children && (
        <span className="sage-property__value">
          {children}
        </span>
      )}
    </span>
  );
};

Property.Group = PropertyGroup;

Property.defaultProps = {
  className: null,
  children: null,
  icon: null,
};

Property.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
};

export default Property;
