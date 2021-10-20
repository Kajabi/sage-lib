import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DRAWER_CONTENT_SPACINGS } from './configs';

export const DrawerBody = ({
  children,
  className,
  spacing,
  ...rest
}) => {
  const classNames = classnames(
    'sage-drawer__content',
    className,
    {
      [`sage-drawer__content--spacing-${spacing}`]: spacing,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

DrawerBody.SPACINGS = DRAWER_CONTENT_SPACINGS;

DrawerBody.defaultProps = {
  children: null,
  className: '',
  spacing: DrawerBody.SPACINGS.DEFAULT,
};

DrawerBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(Object.values(DrawerBody.SPACINGS)),
};
