import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BUTTON_GROUP_ALIGN_OPTIONS } from './configs';
import { SageTokens } from '../configs';

export const ButtonGroup = ({
  align,
  alignEnd,
  borderTop,
  children,
  className,
  gap,
  wrap,
  ...rest
}) => {
  const classNames = classnames(
    'sage-btn-group',
    className,
    {
      'sage-btn-group--align-end': alignEnd,
      [`sage-btn-group--align-${align}`]: align,
      'sage-btn-group--border-top': borderTop,
      [`sage-grid-gap-${gap}`]: gap,
      'sage-btn-group--wrap': wrap,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ButtonGroup.ALIGN_OPTIONS = BUTTON_GROUP_ALIGN_OPTIONS;
ButtonGroup.GAP_OPTIONS = SageTokens.GRID_GAP_OPTIONS;

ButtonGroup.defaultProps = {
  align: ButtonGroup.ALIGN_OPTIONS.NONE,
  alignEnd: false,
  borderTop: false,
  className: null,
  children: null,
  gap: SageTokens.GRID_GAP_OPTIONS.XS,
  wrap: false,
};

ButtonGroup.propTypes = {
  align: PropTypes.oneOf(Object.values(ButtonGroup.ALIGN_OPTIONS)),
  alignEnd: PropTypes.bool,
  borderTop: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  gap: PropTypes.oneOf(Object.values(SageTokens.GRID_GAP_OPTIONS)),
  wrap: PropTypes.bool,
};
