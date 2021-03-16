import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalFooterAside } from './ModalFooterAside';
import { ModalHeader } from './ModalHeader';
import { ModalHeaderAside } from './ModalHeaderAside';
import { MODAL_ANIMATION_PRESETS, MODAL_ANIMATION_DIRECTIONS } from './configs';

export const Modal = ({
  active,
  animation,
  children,
  className,
  containerClassName,
  large,
  noBlur,
  onExit,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal',
    className,
    {
      'sage-modal--active': active,
      'sage-modal--large': large,
      'sage-modal--no-blur': noBlur,
    }
  );

  let animationAttributes = {};

  if (animation) {
    animationAttributes = MODAL_ANIMATION_PRESETS;

    if (animation.direction) {
      animationAttributes['data-sage-animate-direction'] = animation.direction;
    }
  }

  const handleBackgroundClick = (evt) => {
    if (evt.target === evt.currentTarget) {
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
      {...animationAttributes}
    >
      <div
        className={`sage-modal__container ${containerClassName || ''}`}
        aria-modal="true"
        {...rest}
      >
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
Modal.ANIMATION_PRESETS = MODAL_ANIMATION_PRESETS;
Modal.ANIMATION_DIRECTIONS = MODAL_ANIMATION_DIRECTIONS;

Modal.defaultProps = {
  active: false,
  animation: null,
  children: null,
  containerClassName: null,
  className: '',
  large: false,
  noBlur: false,
  onExit: (val) => val,
};

Modal.propTypes = {
  active: PropTypes.bool,
  animation: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      direction: PropTypes.oneOf(Object.values(Modal.ANIMATION_DIRECTIONS))
    })
  ]),
  children: PropTypes.node,
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  large: PropTypes.bool,
  noBlur: PropTypes.bool,
  onExit: PropTypes.func,
};
