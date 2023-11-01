import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ModalFooterAside = ({
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
  /**
   * Content to render within the ModalFooterAside
   */
  children: PropTypes.node,
  /**
   * Class name(s) to be added to the root element
   */
  className: PropTypes.string,
};
