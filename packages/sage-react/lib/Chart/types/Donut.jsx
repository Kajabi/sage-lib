import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Recharts from 'recharts';
import { SageTokens } from '../../configs';
import { Summary, Tooltip as SageTooltip } from '../parts';
import {
  defaultTooltipContentFormatterFn,
  defaultValueFormatterFn,
  getCentered,
  getDataEntries,
  getDonutRadiuses,
  getDonutStartPosition,
  getTotal,
} from '../utilities';

export const Donut = ({
  centered,
  combineDataAfterItem,
  donutDiameter,
  donutWidth,
  data,
  paddingInline,
  paddingBlock,
  startPosition,
  showSummary,
  summary,
  tooltipContentFormatterFn,
  valueFormatterFn,
  ...rest
}) => {
  const propConfigs = {
    ...getDonutRadiuses(donutDiameter, donutWidth),
    ...getDonutStartPosition(startPosition),
    ...getCentered(centered),
  };

  const { Tooltip, PieChart, Pie } = { ...rest };

  const [selfData] = useState(getDataEntries(data, combineDataAfterItem));

  return (
    <>
      <Recharts.ResponsiveContainer width={donutDiameter + paddingInline} aspect={1}>
        <Recharts.PieChart {...PieChart}>
          <Recharts.Pie
            data={selfData}
            dataKey="value"
            nameKey="name"
            {...propConfigs}
            {...Pie}
          />
          {(Tooltip !== false) && (
            <Recharts.Tooltip
              {...SageTokens.RECHARTS.Tooltip}
              content={<SageTooltip contentFormatterFn={tooltipContentFormatterFn} />}
              {...Tooltip}
            />
          )}
        </Recharts.PieChart>
      </Recharts.ResponsiveContainer>
      {showSummary && (
        <Summary chartType="donut" value={valueFormatterFn(getTotal(selfData))} {...summary} />
      )}
    </>
  );
};

Donut.defaultProps = {
  centered: true,
  combineDataAfterItem: 3,
  donutDiameter: 192,
  donutWidth: 48,
  paddingInline: 64,
  paddingBlock: 64,
  startPosition: 'top',
  showSummary: true,
  summary: null,
  tooltipContentFormatterFn: defaultTooltipContentFormatterFn,
  valueFormatterFn: defaultValueFormatterFn,
};

Donut.propTypes = {
  centered: PropTypes.bool,
  combineDataAfterItem: PropTypes.number,
  donutDiameter: PropTypes.number,
  donutWidth: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  paddingInline: PropTypes.number,
  paddingBlock: PropTypes.number,
  showSummary: PropTypes.bool,
  startPosition: PropTypes.string,
  summary: PropTypes.shape({
    caption: PropTypes.string,
    centered: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  tooltipContentFormatterFn: PropTypes.func,
  valueFormatterFn: PropTypes.func,
};
