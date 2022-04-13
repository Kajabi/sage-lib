import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';

export const GridRow = ({
  children,
  className,
  spacerAbove,
  spacerBelow,
  ...rest
}) => {
  const classNames = classnames(
    'sage-row',
    className,
    {
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
  children: null,
  spacerAbove: null,
  spacerBelow: null,
};

GridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  spacerAbove: PropTypes.oneOf(Object.values(SageTokens.SPACERS)),
  spacerBelow: PropTypes.oneOf(Object.values(SageTokens.SPACERS)),
};
