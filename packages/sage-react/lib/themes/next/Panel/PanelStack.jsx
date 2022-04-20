import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PANEL_STACK_SPACINGS } from './configs';

export const PanelStack = ({
  children,
  className,
  spacing,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__stack',
    className,
    {
      [`sage-panel__stack--spacing-${spacing}`]: spacing,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

PanelStack.SPACINGS = PANEL_STACK_SPACINGS;

PanelStack.defaultProps = {
  children: null,
  className: '',
  spacing: PANEL_STACK_SPACINGS.DEFAULT,
};

PanelStack.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(Object.values(PANEL_STACK_SPACINGS)),
};
