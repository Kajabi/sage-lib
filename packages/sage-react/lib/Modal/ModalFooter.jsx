import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ModalFooterAside from './ModalFooterAside';

const ModalFooter = ({
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
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalFooter;
