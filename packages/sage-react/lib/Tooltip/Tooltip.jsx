import React, { Children, useState, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import TooltipElement from './TooltipElement';

import {
  TOOLTIP_SIZES,
  TOOLTIP_POSITIONS,
  TOOLTIP_THEMES,
} from './configs';

const Tooltip = ({
  children,
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const [parentDomRect, setParentDomRect] = useState(null);

  function handleMouseEnter(evt) {
    setParentDomRect(evt.target.getBoundingClientRect());
    setActive(true);
  }

  function handleMouseLeave() {
    setActive(false);
  }

  return (
    <>
      {Children.map(children, child => {
        return cloneElement(child, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave });
      })}
      {active && ReactDOM.createPortal(<TooltipElement parentDomRect={parentDomRect} {...rest} />, document.body) }
    </>
  );
};

Tooltip.POSITIONS = TOOLTIP_POSITIONS;
Tooltip.SIZES = TOOLTIP_SIZES;
Tooltip.THEMES = TOOLTIP_THEMES;

Tooltip.defaultProps = {
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tooltip;
