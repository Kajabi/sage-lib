import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  TOOLTIP_POSITIONS
} from './configs';

/* eslint-disable react-hooks/exhaustive-deps */

const TOOLTIP_DISTANCE = 8;

export const TooltipElement = ({
  content,
  parentDomRect,
  position,
}) => {
  const tooltipRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ top: null, left: null });

  const classNames = classnames(
    'sage-tooltip',
    {
      'sage-tooltip--static': !parentDomRect,
      [`sage-tooltip--${position}`]: position,
    }
  );

  useLayoutEffect(() => {
    if (!parentDomRect) {
      return;
    }

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
        /* eslint-disable max-len */
        if (parentDomRect.right + tooltipRef.current.offsetWidth > document.documentElement.clientWidth) {
          left = document.documentElement.clientWidth - tooltipRef.current.offsetWidth - TOOLTIP_DISTANCE;
        }
        /* eslint-enable max-len */
        break;
      case TOOLTIP_POSITIONS.BOTTOM:
        top = parentDomRect.bottom + TOOLTIP_DISTANCE;
        left = parentDomRect.left + (parentDomRect.width - tooltipRef.current.offsetWidth) / 2;
        break;
      case TOOLTIP_POSITIONS.TOP:
        top = parentDomRect.top - tooltipRef.current.offsetHeight - TOOLTIP_DISTANCE;
        left = parentDomRect.left + (parentDomRect.width - tooltipRef.current.offsetWidth) / 2;
        break;
      default:
        // top and left remain at 0
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
      style={parentDomRect ? coordinates : {}}
    >
      {content}
    </div>
  );
};

TooltipElement.POSITIONS = TOOLTIP_POSITIONS;

TooltipElement.defaultProps = {
  parentDomRect: null,
  position: TOOLTIP_POSITIONS.DEFAULT,
};

TooltipElement.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  parentDomRect: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number,
  }),
  position: PropTypes.oneOf(Object.values(TOOLTIP_POSITIONS)),
};
