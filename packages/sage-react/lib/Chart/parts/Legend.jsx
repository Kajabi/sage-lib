import React from 'react';
import PropTypes from 'prop-types';

export const Legend = ({ payload }) => {
  return (
    <ul className="sage-chart-legend">
      {
        payload.map(({ value, color }, index) => (
          <li
            className="sage-chart-legend__item"
            key={`item-${index}`}
            style={{ '--item-color': color }}
          >
            {value}
          </li>
        ))
      }
    </ul>
  );
};

Legend.defaultProps = {};

Legend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    color: PropTypes.string,
  })),
};
