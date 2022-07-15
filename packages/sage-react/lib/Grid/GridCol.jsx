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
  xlarge,
  ...rest
}) => {
  const hasInfix = size || small || medium || large || xlarge;

  const classNames = classnames(
    className,
    {
      'sage-col': !hasInfix,
      [`sage-col-${size}`]: size,
      [`sage-col--sm-${small}`]: small,
      [`sage-col--md-${medium}`]: medium,
      [`sage-col--lg-${large}`]: large,
      [`sage-col--xl-${xlarge}`]: xlarge,
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
  xlarge: null,
};

GridCol.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  small: validBreakpoint,
  medium: validBreakpoint,
  large: validBreakpoint,
  sageType: PropTypes.bool,
  size: validNumberWithinGrid,
  xlarge: validBreakpoint,
};
