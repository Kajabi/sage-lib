import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalFooterAside = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__footer-aside',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ModalFooterAside.defaultProps = {
  children: null,
  className: '',
};

ModalFooterAside.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalFooterAside;
