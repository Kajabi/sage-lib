import React, { Children, useState, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { TooltipElement } from './TooltipElement';
import {
  TOOLTIP_SIZES,
  TOOLTIP_POSITIONS,
  TOOLTIP_THEMES,
} from './configs';

export const Tooltip = ({
  children,
  content,
  position,
  size,
  theme,
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const [parentDomRect, setParentDomRect] = useState(null);

  function handleActivate(evt) {
    setParentDomRect(evt.target.getBoundingClientRect());
    setActive(true);
  }

  function handleDeactivate() {
    setActive(false);
  }

  return (
    <>
      {Children.map(children, (child) => cloneElement(child, {
        onMouseEnter: handleActivate,
        onFocus: handleActivate,
        onMouseLeave: handleDeactivate,
        onBlur: handleDeactivate,
        ...rest,
      }))}
      {active && ReactDOM.createPortal(
        <TooltipElement
          content={content}
          parentDomRect={parentDomRect}
          position={position}
          size={size}
          theme={theme}
        />,
        document.body
      )}
    </>
  );
};

Tooltip.Element = TooltipElement;
Tooltip.POSITIONS = TOOLTIP_POSITIONS;
Tooltip.SIZES = TOOLTIP_SIZES;
Tooltip.THEMES = TOOLTIP_THEMES;

Tooltip.defaultProps = {
  position: TOOLTIP_POSITIONS.DEFAULT,
  size: TOOLTIP_SIZES.DEFAULT,
  theme: TOOLTIP_THEMES.DEFAULT,
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  position: PropTypes.oneOf(Object.values(TOOLTIP_POSITIONS)),
  size: PropTypes.oneOf(Object.values(TOOLTIP_SIZES)),
  theme: PropTypes.oneOf(Object.values(TOOLTIP_THEMES)),
};
