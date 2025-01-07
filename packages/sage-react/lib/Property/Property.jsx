import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';
import { PropertyGroup } from './PropertyGroup';

export const Property = ({
  children,
  className,
  icon,
  testId,
  ...rest
}) => {
  const classNames = classnames(
    'sage-property',
    className,
  );

  return (
    <span className={classNames} data-kjb-element={testId} {...rest}>
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
  testId: null,
};

Property.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  testId: PropTypes.string,
};
