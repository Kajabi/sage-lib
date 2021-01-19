import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const IconListItemLabel = ({
  children,
  className,
  htmlFor,
  ...rest
}) => {
  const classNames = classnames(
    'sage-icon-list-item__label',
    className,
  );

  return (
    <label className={classNames} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};

IconListItemLabel.defaultProps = {
  children: null,
  className: null,
};

IconListItemLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};
