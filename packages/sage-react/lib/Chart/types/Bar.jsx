import React from 'react';
import PropTypes from 'prop-types';
import { Legend, Tooltip as SageTooltip } from '../parts';
import {
  defaultTooltipContentFormatterFn,
  defaultValueFormatterFn,
} from '../utilities';
import { SageTokens } from '../../configs';

export const Bar = ({
  aspect,
  bars,
  chartingFramework,
  data,
  showLegend,
  tooltipContentFormatterFn,
  valueFormatterFn,
  width,
  ...rest
}) => {
  const { BarChart, CartesianGrid, Tooltip, XAxis, YAxis } = { ...rest };

  const Recharts = chartingFramework;

  return (
    <>
      <Recharts.ResponsiveContainer width={width} aspect={aspect}>
        <Recharts.BarChart
          data={data}
          {...SageTokens.RECHARTS.BarChart}
          {...BarChart}
        >
          {(Tooltip !== false) && (
            <Recharts.Tooltip
              {...SageTokens.RECHARTS.Tooltip}
              content={<SageTooltip contentFormatterFn={tooltipContentFormatterFn} />}
              {...Tooltip}
            />
          )}
          {(CartesianGrid !== false) && (
            <Recharts.CartesianGrid
              {...SageTokens.RECHARTS.CartesianGrid}
              {...CartesianGrid}
            />
          )}
          {(XAxis !== false) && (
            <Recharts.XAxis
              dataKey="name"
              {...SageTokens.RECHARTS.XAxis}
              {...XAxis}
            />
          )}
          {(YAxis !== false) && (
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
    fill: SageTokens.COLOR_PALETTE.GREEN_150,
    name: 'Value'
  }],
  showLegend: false,
  tooltipContentFormatterFn: defaultTooltipContentFormatterFn,
  valueFormatterFn: defaultValueFormatterFn,
  width: 720,
};

Bar.propTypes = {
  aspect: PropTypes.number,
  bars: PropTypes.arrayOf(PropTypes.shape({
    dataKey: PropTypes.string,
    fill: PropTypes.string,
    name: PropTypes.string,
  })),
  chartingFramework: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
  })).isRequired,
  showLegend: PropTypes.bool,
  tooltipContentFormatterFn: PropTypes.func,
  valueFormatterFn: PropTypes.func,
  width: PropTypes.number,
};
