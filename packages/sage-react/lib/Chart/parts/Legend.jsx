import React from 'react';
import PropTypes from 'prop-types';

export const Legend = ({ payload }) => (
  <ul className="sage-chart-legend">
    {
      payload.map(({ value, color }) => (
        <li
          className="sage-chart-legend__item"
          key={`item-${value}`}
          style={{ '--item-color': color }}
        >
          {value}
        </li>
      ))
    }
  </ul>
);

Legend.defaultProps = {
  payload: [],
};

Legend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    color: PropTypes.string,
  })),
};
