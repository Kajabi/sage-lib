import React from 'react';
import PropTypes from 'prop-types';
import { TooltipElement } from '../../Tooltip/TooltipElement';

export const Tooltip = ({
  active,
  payload,
  contentFormatterFn,
}) => (active && payload && payload.length > 0) ? (
  <TooltipElement
    content={(
      <>
        {payload.map(({ name, value }, i) => (
          <React.Fragment key={`${payload.name}-${i}-${payload.value}`}>
            {contentFormatterFn({ name, value })}<br/>
          </React.Fragment>
        ))}
      </>
    )}
    position={null}
    theme={TooltipElement.THEMES.LIGHT}
  />
) : null;

Tooltip.defaultProps = {};

Tooltip.propTypes = {
  active: PropTypes.bool,
  contentFormatterFn: PropTypes.func,
  label: PropTypes.string,
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  })),
};
