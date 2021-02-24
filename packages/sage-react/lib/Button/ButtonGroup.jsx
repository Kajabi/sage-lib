import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BUTTON_GROUP_GAP_OPTIONS } from './configs';

export const ButtonGroup = ({
  alignEnd,
  children,
  className,
  gap,
  ...rest
}) => {
  const classNames = classnames(
    'sage-btn-group',
    className,
    {
      'sage-btn-group--align-end': alignEnd,
      [`sage-btn-group--gap-${gap}`]: gap,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ButtonGroup.GAP_OPTIONS = BUTTON_GROUP_GAP_OPTIONS;

ButtonGroup.defaultProps = {
  alignEnd: false,
  className: null,
  children: null,
  gap: ButtonGroup.GAP_OPTIONS.XS,
};

ButtonGroup.propTypes = {
  alignEnd: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  gap: PropTypes.oneOf(Object.values(ButtonGroup.GAP_OPTIONS)),
};
