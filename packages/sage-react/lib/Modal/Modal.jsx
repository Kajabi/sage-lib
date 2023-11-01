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
    attrs.role = 'button';
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
  /**
   * Enabling this property will return the JS early to not initialize any handlers.
   */
  active: PropTypes.bool,
  /**
   * Toggles whether to allow scrolling of the modal by attaching `.sage-modal--scrollable`.
   */
  allowScroll: PropTypes.bool,
  /**
   * Toggles whether to animate the modal by attaching `.sage-modal--animate`. If an object is passed, it will be used to set the direction of the animation.
   */
  animation: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      direction: PropTypes.oneOf(Object.values(Modal.ANIMATION_DIRECTIONS))
    })
  ]),
  /**
   * Content to render within the modal
   */
  children: PropTypes.node,
  /**
   * Class name(s) to apply to the container element, `.sage-modal__container`. Useful for applying custom styles.
   */
  containerClassName: PropTypes.string,
  /**
   * Class name(s) to apply to the root element, `.sage-modal`. Useful for applying custom styles.
   */
  className: PropTypes.string,
  /**
   * Enabling this property will return the JS early to not initialize any handlers.
   */
  disableBackgroundBlur: PropTypes.bool,
  /**
   * Enabling this property will return the JS early to not initialize any handlers.
   */
  disableBackgroundDismiss: PropTypes.bool,
  /**
   * Toggles whether to use the fullscreen variant of the modal by attaching `.sage-modal--fullscreen`.
   */
  fullScreen: PropTypes.bool,
  /**
   * Unique identifier for component. Should match the `data-js-modaltrigger` property on the corresponding button
   */
  id: PropTypes.string,
  /**
   * Denotes the closing state of the by attaching `.sage-modal--is-closing`.
   */
  isClosing: PropTypes.bool,
  /**
   * Toggles whether to use the large variant of the modal by attaching `.sage-modal--large`
   */
  large: PropTypes.bool,
  /**
   * Callback function for when the modal is closed
   */
  onExit: PropTypes.func,
  /**
   * Presets a size for the modal
   */
  size: PropTypes.oneOf(Object.values(Modal.SIZES))
};
