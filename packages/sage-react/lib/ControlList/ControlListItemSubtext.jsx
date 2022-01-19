import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ControlListItemSubtext = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-control-list-item__label-subtext',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ControlListItemSubtext.defaultProps = {
  children: null,
  className: null,
};

ControlListItemSubtext.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
