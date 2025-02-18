import React, { Children, useState, useEffect, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { TooltipElement } from './TooltipElement';
import { TOOLTIP_POSITIONS } from './configs';

export const Tooltip = ({
  children,
  content,
  position,
  tooltipCustomClass,
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

  // fix for Safari iOS back button issue
  useEffect(() => {
    const handlePageShow = () => {
      setActive(false);
    };

    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child, {
          onMouseEnter: handleActivate,
          onFocus: handleActivate,
          onMouseLeave: handleDeactivate,
          onBlur: handleDeactivate,
          ...rest,
        })
      )}
      {active
        && ReactDOM.createPortal(
          <TooltipElement
            content={content}
            parentDomRect={parentDomRect}
            position={position}
            tooltipCustomClass={tooltipCustomClass}
          />,
          document.body
        )}
    </>
  );
};

Tooltip.Element = TooltipElement;
Tooltip.POSITIONS = TOOLTIP_POSITIONS;

Tooltip.defaultProps = {
  position: TOOLTIP_POSITIONS.DEFAULT,
  tooltipCustomClass: '',
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  position: PropTypes.oneOf(Object.values(TOOLTIP_POSITIONS)),
  tooltipCustomClass: PropTypes.string,
};
