import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ControlListItemLabel = ({
  children,
  className,
  htmlFor,
  ...rest
}) => {
  const classNames = classnames(
    'sage-control-list-item__label',
    className,
  );

  return (
    <label className={classNames} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};

ControlListItemLabel.defaultProps = {
  children: null,
  className: null,
};

ControlListItemLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};
