import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ModalHeaderActions = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__header-actions',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ModalHeaderActions.defaultProps = {
  children: null,
  className: '',
};

ModalHeaderActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
