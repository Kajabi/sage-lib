import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ModalHeaderAside = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__header-aside',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ModalHeaderAside.defaultProps = {
  children: null,
  className: '',
};

ModalHeaderAside.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
