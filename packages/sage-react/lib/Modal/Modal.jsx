import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalFooterAside } from './ModalFooterAside';
import { ModalHeader } from './ModalHeader';
import { ModalHeaderAside } from './ModalHeaderAside';
import { MODAL_ANIMATION_PRESETS, MODAL_ANIMATION_DIRECTIONS, MODAL_SIZES } from './configs';

export const Modal = ({
  active,
  allowScroll,
  animation,
  children,
  className,
  containerClassName,
  disableBackgroundBlur,
  disableBackgroundDismiss,
  fullScreen,
  id,
  isClosing,
  large,
  onExit,
  size,
  ...rest
}) => {
  const [mouseDownSrc, setMouseDownSrc] = useState(null);
  const classNames = classnames(
    'sage-modal',
    className,
    {
      'sage-modal--active': active,
      'sage-modal--is-closing': isClosing,
      'sage-modal--scrollable': allowScroll,
      'sage-modal--large': large,
      'sage-modal--fullscreen': fullScreen,
      'sage-modal--no-blur': disableBackgroundBlur,
      'sage-modal--no-background-dismiss': disableBackgroundDismiss,
      [`sage-modal--size-${size}`]: size,
    }
  );

  useEffect(() => {
    if (active) {
      document.body.classList.add('sage-page--has-open-modal');
    }

    return () => { document.body.classList.remove('sage-page--has-open-modal'); };
  });

  let animationAttributes = {};

  if (animation) {
    animationAttributes = MODAL_ANIMATION_PRESETS;

    if (animation.direction) {
      animationAttributes['data-sage-animate-direction'] = animation.direction;
    }
  }

  const handleMouseDown = (evt) => setMouseDownSrc(evt.target);

  const handleMouseUp = (evt) => {
    if (evt.target === evt.currentTarget && evt.target === mouseDownSrc) {
      onExit(true);
    }

    setMouseDownSrc(null);
  };

  const handleBackgroundKeypress = () => {
    // TODO: Add keypress handling
    // console.log(e.keyCode);
  };

  const attrs = {};

  if (!disableBackgroundDismiss) {
    attrs.onMouseDown = handleMouseDown;
    attrs.onMouseUp = handleMouseUp;
    attrs.onKeyPress = handleBackgroundKeypress;
    attrs.tabIndex = '0';
  }

  return (
    <div
      className={classNames}
      id={id}
      open={active}
      {...animationAttributes}
      {...attrs}
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
Modal.SIZES = MODAL_SIZES;

Modal.defaultProps = {
  active: false,
  animation: null,
  allowScroll: false,
  children: null,
  containerClassName: null,
  className: '',
  fullScreen: false,
  large: false,
  id: null,
  isClosing: false,
  disableBackgroundBlur: false,
  disableBackgroundDismiss: false,
  onExit: (val) => val,
  size: null,
};

Modal.propTypes = {
  active: PropTypes.bool,
  allowScroll: PropTypes.bool,
  animation: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      direction: PropTypes.oneOf(Object.values(Modal.ANIMATION_DIRECTIONS))
    })
  ]),
  children: PropTypes.node,
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  disableBackgroundBlur: PropTypes.bool,
  disableBackgroundDismiss: PropTypes.bool,
  fullScreen: PropTypes.bool,
  id: PropTypes.string,
  isClosing: PropTypes.bool,
  large: PropTypes.bool,
  onExit: PropTypes.func,
  size: PropTypes.oneOf(Object.values(Modal.SIZES))
};
