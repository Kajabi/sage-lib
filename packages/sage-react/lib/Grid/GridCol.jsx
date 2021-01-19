import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames } from '../configs';
import { validNumberWithinGrid, validBreakpoint } from './configs';

export const GridCol = ({
  children,
  className,
  large,
  medium,
  sageType,
  size,
  small,
  ...rest
}) => {
  const classNames = classnames(
    className,
    {
      [`sage-col-${size}`]: size,
      [`sage-col--sm-${small}`]: small,
      [`sage-col--md-${medium}`]: medium,
      [`sage-col--lg-${large}`]: large,
      [`${SageClassnames.TYPE_BLOCK}`]: sageType
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

GridCol.defaultProps = {
  className: null,
  children: null,
  large: null,
  medium: null,
  sageType: false,
  small: null,
  size: null,
};

GridCol.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  small: validBreakpoint,
  medium: validBreakpoint,
  large: validBreakpoint,
  sageType: PropTypes.bool,
  size: validNumberWithinGrid
};
