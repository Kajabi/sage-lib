import PropTypes from 'prop-types';

export const CHART_TYPES = {
  DONUT: 'donut',
};

export const dataPropTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
