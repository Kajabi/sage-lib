import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CHART_TYPES } from '../configs';

export const Summary = ({
  caption,
  chartType,
  className,
  centered,
  label,
  value,
  ...rest
}) => {
  const classNames = classnames(
    'sage-chart-summary',
    className,
    {
      'sage-chart-summary--centered': centered,
      [`sage-chart-summary--${chartType}`]: chartType,
    }
  );
  return (
    <p className={classNames} {...rest}>
      {label && (
        <span className="sage-chart-summary__label">{label}</span>
      )}
      <em className="sage-chart-summary__value">{value}</em>
      {caption && (
        <span className="sage-chart-summary__caption">{caption}</span>
      )}
    </p>
  );
};

Summary.defaultProps = {
  caption: null,
  centered: true,
  chartType: null,
  label: null,
};

Summary.propTypes = {
  caption: PropTypes.string,
  chartType: PropTypes.oneOf(Object.values(CHART_TYPES)),
  centered: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};
