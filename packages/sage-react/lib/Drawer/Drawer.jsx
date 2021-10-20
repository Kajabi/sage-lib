import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DrawerBody } from './DrawerBody';
import { DrawerHeader } from './DrawerHeader';
import { DRAWER_ANIMATION_PRESETS, DRAWER_ANIMATION_DIRECTIONS } from './configs';

export const Drawer = ({
  active,
  animation,
  children,
  className,
  containerClassName,
  full,
  noBlur,
  onExit,
  ...rest
}) => {
  const classNames = classnames(
    'sage-drawer',
    className,
    {
      'sage-drawer--active': active,
      'sage-drawer--full': full,
      'sage-drawer--no-blur': noBlur,
    }
  );

  let animationAttributes = {};

  if (animation) {
    animationAttributes = DRAWER_ANIMATION_PRESETS;

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
        className={`sage-drawer__container ${containerClassName || ''}`}
        aria-expanded="true"
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

Drawer.Body = DrawerBody;
Drawer.Header = DrawerHeader;
Drawer.ANIMATION_PRESETS = DRAWER_ANIMATION_PRESETS;
Drawer.ANIMATION_DIRECTIONS = DRAWER_ANIMATION_DIRECTIONS;

Drawer.defaultProps = {
  active: false,
  animation: null,
  children: null,
  containerClassName: null,
  className: '',
  full: false,
  noBlur: false,
  onExit: (val) => val,
};

Drawer.propTypes = {
  active: PropTypes.bool,
  animation: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      direction: PropTypes.oneOf(Object.values(Drawer.ANIMATION_DIRECTIONS))
    })
  ]),
  children: PropTypes.node,
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  full: PropTypes.bool,
  noBlur: PropTypes.bool,
  onExit: PropTypes.func,
};
