import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames } from '../configs';
import { validNumberWithinGrid, validBreakpoint, HORIZONTAL_ALIGNMENT_TYPES, VERTICAL_ALIGNMENT_TYPES } from './configs';

export const GridCol = ({
  children,
  className,
  horizontalAlignment,
  large,
  medium,
  sageType,
  size,
  small,
  xlarge,
  verticalAlignment,
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
      [`sage-col--align-${horizontalAlignment}`]: horizontalAlignment,
      [`sage-col--valign-${verticalAlignment}`]: verticalAlignment,
      [`${SageClassnames.TYPE_BLOCK}`]: sageType
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

GridCol.HORIZONTAL_ALIGNMENT_TYPES = HORIZONTAL_ALIGNMENT_TYPES;
GridCol.VERTICAL_ALIGNMENT_TYPES = VERTICAL_ALIGNMENT_TYPES;

GridCol.defaultProps = {
  className: null,
  children: null,
  horizontalAlignment: null,
  large: null,
  medium: null,
  sageType: false,
  small: null,
  size: null,
  xlarge: null,
  verticalAlignment: null,
};

GridCol.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  horizontalAlignment: PropTypes.oneOf(Object.values(GridCol.HORIZONTAL_ALIGNMENT_TYPES)),
  small: validBreakpoint,
  medium: validBreakpoint,
  large: validBreakpoint,
  sageType: PropTypes.bool,
  size: validNumberWithinGrid,
  xlarge: validBreakpoint,
  /**
   * Sets the vertical alignment for the grid col
   */
  verticalAlignment: PropTypes.oneOf(Object.values(GridCol.VERTICAL_ALIGNMENT_TYPES)),
};
