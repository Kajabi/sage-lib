/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const DropdownPanel = ({
  children,
  forwardedRef,
  maxWidth,
  modifier,
  onClickScreen,
  onExit,
  style,
}) => {
  const menuEl = useRef(null);
  const classNames = classnames(
    'sage-dropdown__panel',
    {
      [`sage-dropdown__panel--${modifier}`]: modifier,
    }
  );

  const handlePanelClick = (e) => {
    if (e.target === menuEl.current) {
      onClickScreen();
    }
  };

  // Combine provided ref with internal ref if needed
  const refCallback = (element) => {
    // Keep our internal ref updated
    menuEl.current = element;

    // Update the forwarded ref if provided
    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(element);
      } else {
        forwardedRef.current = element;
      }
    }
  };

  return (
    <div
      ref={refCallback}
      className={classNames}
      onClick={handlePanelClick}
      role="dialog"
      style={{
        maxWidth,
        ...style,
        transitionProperty: (style && style.transition) ? undefined : 'none',
        willChange: 'transform, opacity'
      }}
    >
      {children && React.cloneElement(children, { onExit })}
    </div>
  );
};

DropdownPanel.defaultProps = {
  children: null,
  forwardedRef: null,
  maxWidth: null,
  modifier: null,
  onClickScreen: (evt) => evt,
  onExit: (evt) => evt,
  style: {},
};

DropdownPanel.propTypes = {
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  maxWidth: PropTypes.string,
  modifier: PropTypes.string,
  onClickScreen: PropTypes.func,
  onExit: PropTypes.func,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object, // For nested style objects like in spread properties
    ])
  ),
};
