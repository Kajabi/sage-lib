import React from 'react';
import PropTypes from 'prop-types';
import { EmptyState } from '../EmptyState';
import { Loader } from '../Loader';
import { Donut } from './types';
import { CHART_TYPES, dataPropTypes } from './configs';
import { SageTokens } from '../configs';

export const Chart = ({
  configs,
  data,
  noDataText,
  loading,
  containerStyles,
  type,
}) => {
  const renderChart = () => {
    if (!data) {
      return (
        <EmptyState compact={true} icon={SageTokens.ICONS.CHART} text={noDataText} />
      );
    }

    let chart = null;
    switch(type) {
      case CHART_TYPES.DONUT:
        chart = <Donut data={data} {...configs} />
        break;
      default:
        break;
    }

    return chart;
  };

  return (
    <div className="sage-chart-container" style={containerStyles}>
      {loading ? (
        <Loader loading={true} type={Loader.TYPES.SPINNER} />
      ) : renderChart()}
    </div>
  );
};

Chart.TYPES = CHART_TYPES;

Chart.defaultProps = {
  configs: null,
  containerStyles: null,
  data: null,
  loading: true,
  noDataText: 'No data is available for this chart.',
};

Chart.propTypes = {
  configs: PropTypes.shape({}),
  containerStyles: PropTypes.shape({}),
  data: PropTypes.arrayOf(PropTypes.shape(dataPropTypes)),
  loading: PropTypes.bool,
  noDataText: PropTypes.string,
  type: PropTypes.oneOf(Object.values(Chart.TYPES)).isRequired,
};
