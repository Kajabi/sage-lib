import React from 'react';
import PropTypes from 'prop-types';
import * as Recharts from 'recharts';
import { Summary, Tooltip } from '../parts';
import { getCentered, getDonutRadiuses, getDonutStartPosition, getTotal } from '../utilities';

export const Donut = ({
  caption,
  centered,
  donutDiameter,
  donutWidth,
  data,
  paddingInline,
  paddingBlock,
  startPosition,
  showSummary,
  summary,
  tooltipContentFormatterFn,
  title,
  valueFormatterFn,
  ...rest
}) => {
  const configs = {
    ...getDonutRadiuses(donutDiameter, donutWidth),
    ...getDonutStartPosition(startPosition),
    ...getCentered(centered),
    ...rest
  };

  return (
    <>
      <Recharts.ResponsiveContainer width={donutDiameter + paddingInline} aspect={1}>
        <Recharts.PieChart>
          <Recharts.Pie
            data={data}
            dataKey="value"
            nameKey="name"
            {...configs}
          />
          <Recharts.Tooltip content={<Tooltip contentFormatterFn={tooltipContentFormatterFn} />} />
        </Recharts.PieChart>
      </Recharts.ResponsiveContainer>
      {showSummary && (
        <Summary chartType="donut" value={valueFormatterFn(getTotal(data))} {...summary} />
      )}
    </>
  );
};

Donut.defaultProps = {
  caption: null,
  centered: true,
  donutDiameter: 192,
  donutWidth: 48,
  paddingInline: 64,
  paddingBlock: 64,
  startPosition: 'top',
  showSummary: true,
  smmary: null,
  title: null,
  tooltipContentFormatterFn: ({ name, value }) => `${name} : ${value}`,
  valueFormatterFn: val => new Intl.NumberFormat().format(val),
};

Donut.propTypes = {
  caption: PropTypes.string,
  centered: PropTypes.bool,
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
  title: PropTypes.string,
  tooltipContentFormatterFn: PropTypes.func,
  valueFormatterFn: PropTypes.func,
};
