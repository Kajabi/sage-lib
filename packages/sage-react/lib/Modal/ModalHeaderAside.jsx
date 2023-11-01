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
  /**
   * Content to render within the ModalHeaderAside
   */
  children: PropTypes.node,
  /**
   * Class name(s) to be added to the root element
   */
  className: PropTypes.string,
};
