import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { HORIZONTAL_ALIGNMENT_TYPES } from './configs';

export const GridRow = ({
  className,
  horizontalAlignment,
  spacerAbove,
  spacerBelow,
  ...rest
}) => {
  const {children} = rest;
  const classNames = classnames(
    'sage-row',
    className,
    {
      [`sage-row--align-${horizontalAlignment}`]: horizontalAlignment,
      'sage-spacer-top': spacerBelow === SageTokens.SPACERS.MD,
      [`sage-spacer-top-${spacerAbove}`]: spacerAbove && spacerAbove !== SageTokens.SPACERS.MD,
      'sage-spacer-bottom': spacerBelow === SageTokens.SPACERS.MD,
      [`sage-spacer-bottom-${spacerBelow}`]: spacerBelow && spacerBelow !== SageTokens.SPACERS.MD,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

GridRow.defaultProps = {
  className: null,
  horizontalAlignment: null,
  spacerAbove: null,
  spacerBelow: null,
};

GridRow.propTypes = {
  /**
   * Sets classes passed into component on `.sage-row` element
   */
  className: PropTypes.string,
  /**
   * Sets the horizontal alignment for the grid row
   */
  horizontalAlignment: PropTypes.oneOf(Object.values(HORIZONTAL_ALIGNMENT_TYPES)),
  /**
   * Adds preset spacer to top of grid row
   */
  spacerAbove: PropTypes.oneOf(Object.values(SageTokens.SPACERS)),
  /**
   * Adds preset spacer to bottom of grid row
   */
  spacerBelow: PropTypes.oneOf(Object.values(SageTokens.SPACERS)),
};
