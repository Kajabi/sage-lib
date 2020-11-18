import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ModalHeaderAside from './ModalHeaderAside';

const ModalHeader = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__header',
    className,
  );

  return (
    <header className={classNames} {...rest}>
      {children}
    </header>
  );
};

ModalHeader.Aside = ModalHeaderAside;

ModalHeader.defaultProps = {
  children: null,
  className: '',
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalHeader;
