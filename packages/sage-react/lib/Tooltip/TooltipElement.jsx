import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  TOOLTIP_SIZES,
  TOOLTIP_POSITIONS,
  TOOLTIP_THEMES,
} from './configs';

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
    let distance = 8,
        left = null,
        top = null;

    switch (position) {
      case TOOLTIP_POSITIONS.LEFT:
        top = (parentDomRect.top + parentDomRect.bottom) / 2 - tooltipRef.current.offsetHeight / 2;
        left = parentDomRect.left - distance - tooltipRef.current.offsetWidth;
        if (parentDomRect.left - tooltipRef.current.offsetWidth < 0) {
          left = distance;
        }
        break;
      case TOOLTIP_POSITIONS.RIGHT:
        top = (parentDomRect.top + parentDomRect.bottom) / 2 - tooltipRef.current.offsetHeight / 2;
        left = parentDomRect.right + distance;
        if (parentDomRect.right + tooltipRef.current.offsetWidth > document.documentElement.clientWidth) {
          left =  document.documentElement.clientWidth - tooltipRef.current.offsetWidth - distance;
        }
        break;
      case TOOLTIP_POSITIONS.BOTTOM:
        top = parentDomRect.bottom + distance;
        left = parentDomRect.left + (parentDomRect.width - tooltipRef.current.offsetWidth) / 2;
        break;
      case TOOLTIP_POSITIONS.TOP:
        top = parentDomRect.top - tooltipRef.current.offsetHeight - distance;
        left = parentDomRect.left + (parentDomRect.width - tooltipRef.current.offsetWidth) / 2;
      break;
    }

    setCoordinates({top: top, left: left});
  }, [tooltipRef.current]);

  return (
    <div ref={tooltipRef} className={classNames} style={coordinates}>
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
