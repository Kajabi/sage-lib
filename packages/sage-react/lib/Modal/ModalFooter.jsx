import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ModalFooterAside } from './ModalFooterAside';

export const ModalFooter = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__footer',
    className,
  );

  return (
    <footer className={classNames} {...rest}>
      {children}
    </footer>
  );
};

ModalFooter.Aside = ModalFooterAside;

ModalFooter.defaultProps = {
  children: null,
  className: '',
};

ModalFooter.propTypes = {
  /**
   * Content to render within the ModalFooter
   */
  children: PropTypes.node,
  /**
   * Class name(s) to be added to the root element
   */
  className: PropTypes.string,
};
