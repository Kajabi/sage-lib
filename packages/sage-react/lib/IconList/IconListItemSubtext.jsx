import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const IconListItemSubtext = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-icon-list-item__label-subtext',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

IconListItemSubtext.defaultProps = {
  children: null,
  className: null,
};

IconListItemSubtext.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
