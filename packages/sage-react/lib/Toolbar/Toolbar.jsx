import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ToolbarGroup } from './ToolbarGroup';
import { TOOLBAR_GAP_OPTIONS } from './configs';

export const Toolbar = ({
  children,
  className,
  gap,
  ...rest
}) => {
  const classNames = classnames(
    'sage-toolbar',
    className,
    {
      [`sage-grid-gap-${gap}`]: gap
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

Toolbar.Group = ToolbarGroup;
Toolbar.GAP_OPTIONS = TOOLBAR_GAP_OPTIONS;

Toolbar.defaultProps = {
  children: null,
  className: null,
  gap: Toolbar.GAP_OPTIONS.MD,
};

Toolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.oneOf(Object.values(Toolbar.GAP_OPTIONS)),
};
