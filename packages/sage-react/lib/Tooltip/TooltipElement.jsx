import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  TOOLTIP_SIZES,
  TOOLTIP_POSITIONS,
  TOOLTIP_THEMES,
} from './configs';

const TOOLTIP_DISTANCE = 8;

const TooltipElement = ({
  content,
  parentDomRect,
  position,
  size,
  theme,
}) => {
  const tooltipRef = useRef(null);
  const [coordinates, setCoordinates] = useState({top: null, left: null});

  const classNames = classnames(
    'sage-tooltip',
    {
      [`sage-tooltip--${position}`]: position,
      [`sage-tooltip--${size}`]: size,
      [`sage-tooltip--${theme}`]: theme,
    }
  );

  useLayoutEffect(() => {
    let left = 0,
        top = 0;

    switch (position) {
      case TOOLTIP_POSITIONS.LEFT:
        top = (parentDomRect.top + parentDomRect.bottom) / 2 - tooltipRef.current.offsetHeight / 2;
        left = parentDomRect.left - TOOLTIP_DISTANCE - tooltipRef.current.offsetWidth;
        if (parentDomRect.left - tooltipRef.current.offsetWidth < 0) {
          left = TOOLTIP_DISTANCE;
        }
        break;
      case TOOLTIP_POSITIONS.RIGHT:
        top = (parentDomRect.top + parentDomRect.bottom) / 2 - tooltipRef.current.offsetHeight / 2;
        left = parentDomRect.right + TOOLTIP_DISTANCE;
        if (parentDomRect.right + tooltipRef.current.offsetWidth > document.documentElement.clientWidth) {
          left =  document.documentElement.clientWidth - tooltipRef.current.offsetWidth - TOOLTIP_DISTANCE;
        }
        break;
      case TOOLTIP_POSITIONS.BOTTOM:
        top = parentDomRect.bottom + TOOLTIP_DISTANCE;
        left = parentDomRect.left + (parentDomRect.width - tooltipRef.current.offsetWidth) / 2;
        break;
      case TOOLTIP_POSITIONS.TOP:
        top = parentDomRect.top - tooltipRef.current.offsetHeight - TOOLTIP_DISTANCE;
        left = parentDomRect.left + (parentDomRect.width - tooltipRef.current.offsetWidth) / 2;
      break;
    }

    setCoordinates({
      top: top + window.pageYOffset,
      left: left + window.pageXOffset,
    });
  }, [tooltipRef.current]);

  return (
    <div
      role="tooltip"
      ref={tooltipRef}
      className={classNames}
      style={coordinates}
    >
      {content}
    </div>
  );
};

TooltipElement.defaultProps = {
  position: TOOLTIP_POSITIONS.DEFAULT,
  size: TOOLTIP_SIZES.DEFAULT,
  theme: TOOLTIP_THEMES.DEFAULT,
};

TooltipElement.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  parentDomRect: PropTypes.object.isRequired,
  position: PropTypes.oneOf(Object.values(TOOLTIP_POSITIONS)),
  size: PropTypes.oneOf(Object.values(TOOLTIP_SIZES)),
  theme: PropTypes.oneOf(Object.values(TOOLTIP_THEMES)),
};

export default TooltipElement;
