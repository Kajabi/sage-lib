import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalFooterAside from './ModalFooterAside';
import ModalHeader from './ModalHeader';
import ModalHeaderAside from './ModalHeaderAside';

const Modal = ({
  active,
  children,
  className,
  onExit,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal',
    className,
    {
      'sage-modal--active': active,
    }
  );

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onExit(true);
    }
  };

  const handleBackgroundKeypress = () => {
    // TODO: Add keypress handling
    // console.log(e.keyCode);
  };

  return (
    <div
      className={classNames}
      open={active}
      onClick={handleBackgroundClick}
      onKeyPress={handleBackgroundKeypress}
      role="button"
      tabIndex="0"
    >
      <div className="sage-modal__container" aria-modal="true" {...rest}>
        {children}
      </div>
    </div>
  );
};

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.FooterAside = ModalFooterAside;
Modal.Header = ModalHeader;
Modal.HeaderAside = ModalHeaderAside;

Modal.defaultProps = {
  active: false,
  children: null,
  className: '',
  onExit: a => a,
};

Modal.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onExit: PropTypes.func,
};

export default Modal;
