import React from 'react';
import PropTypes from 'prop-types';
import { TooltipElement } from '../../Tooltip/TooltipElement';

export const Tooltip = ({
  active,
  payload,
  contentFormatterFn,
}) => {
  console.log('tooltip');
  if (active && payload && payload.length > 0) {
    const [target] = payload;
    return (
      <TooltipElement content={contentFormatterFn(target)} position={null} />
    );
  }

  return null;
};

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
