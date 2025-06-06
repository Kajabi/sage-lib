import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { TooltipElement } from '../../Tooltip/TooltipElement';
import { defaultTooltipContentFormatterFn } from '../utilities';

export const Tooltip = ({
  active,
  payload,
  contentFormatterFn,
  ...rest
}) => ((active && payload && payload.length > 0) ? (
  <TooltipElement
    content={(
      <>
        {payload.map(({ name, value }) => (
          <React.Fragment key={uuid()}>
            {contentFormatterFn({ name, value })}<br />
          </React.Fragment>
        ))}
      </>
    )}
    position={null}
    theme={TooltipElement.THEMES.LIGHT}
    {...rest}
  />
) : null);

Tooltip.defaultProps = {
  active: false,
  contentFormatterFn: defaultTooltipContentFormatterFn,
  payload: null,
};

Tooltip.propTypes = {
  active: PropTypes.bool,
  contentFormatterFn: PropTypes.func,
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  })),
};
