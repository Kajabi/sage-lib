import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Recharts from 'recharts';
import { Legend, Tooltip as SageTooltip } from '../parts';
import {
  defaultTooltipContentFormatterFn,
  defaultValueFormatterFn,
} from '../utilities';
import { SageTokens } from '../../configs';

export const Bar = ({
  aspect,
  bars,
  data,
  showLegend,
  tooltipContentFormatterFn,
  valueFormatterFn,
  width,
  ...rest
}) => {
  const [selfData, setSelfData] = useState(data);
  const { BarChart, CartesianGrid, Tooltip, XAxis, YAxis } = { ...rest };
  const gridConfigs = {
    stroke: SageTokens.COLOR_PALETTE.GREY_200,
  };
  const tickConfigs = {
    fill: SageTokens.COLOR_PALETTE.CHARCOAL_100,
    fontSize: 12,
  };

  return (
    <>
      <Recharts.ResponsiveContainer width={width} aspect={aspect}>
        <Recharts.BarChart
          data={selfData}
          {...SageTokens.RECHARTS.BarChart}
          {...BarChart}
        >
          <Recharts.Tooltip
            {...SageTokens.RECHARTS.Tooltip}
            content={<SageTooltip contentFormatterFn={tooltipContentFormatterFn} />}
            {...Tooltip}
          />
          {CartesianGrid && (
            <Recharts.CartesianGrid
              {...SageTokens.RECHARTS.CartesianGrid}
              {...CartesianGrid}
            />
          )}
          {XAxis && (
            <Recharts.XAxis
              {...SageTokens.RECHARTS.XAxis}
              {...XAxis}
            />
          )}
          {YAxis && (
            <Recharts.YAxis
              {...SageTokens.RECHARTS.XAxis}
              {...YAxis}
            />
          )}
          {showLegend && (
            <Recharts.Legend content={<Legend />} />
          )}
          {bars.map(({ dataKey, fill, ...rest }) => (
            <Recharts.Bar key={dataKey} dataKey={dataKey} fill={fill} {...rest} />
          ))}
        </Recharts.BarChart>
      </Recharts.ResponsiveContainer>
    </>
  );
};

Bar.defaultProps = {
  aspect: 1.8,
  bars: [{
    dataKey: 'value',
    fill: SageTokens.COLOR_PALETTE.SAGE_200,
    name: 'Value'
  }],
  CartesianGrid: {},
  showLegend: false,
  tooltipContentFormatterFn: defaultTooltipContentFormatterFn,
  valueFormatterFn: defaultValueFormatterFn,
  width: 720,
  XAxis: { dataKey: 'name' },
  YAxis: {},
};

Bar.propTypes = {
  aspect: PropTypes.number,
  bars: PropTypes.arrayOf(PropTypes.shape({
    dataKey: PropTypes.string,
    fill: PropTypes.string,
  })),
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
  })).isRequired,
  showLegend: PropTypes.bool,
  tooltipContentFormatterFn: PropTypes.func,
  valueFormatterFn: PropTypes.func,
  width: PropTypes.number,
};
