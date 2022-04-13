import { TOKENS_COLOR_PALETTE } from './colors';

const gridConfigs = {
  stroke: TOKENS_COLOR_PALETTE.GREY_200,
};
const tickConfigs = {
  fill: TOKENS_COLOR_PALETTE.CHARCOAL_100,
  fontSize: 12,
};

export const TOKENS_RECHARTS = {
  BarChart: {
    barGap: 8,
    barCategoryGap: 16,
  },
  CartesianGrid: {
    stroke: TOKENS_COLOR_PALETTE.GREY_300,
    vertical: false,
  },
  Tooltip: {
    cursor: false,
  },
  XAxis: {
    axisLine: { ...gridConfigs },
    tickLine: false,
    tick: { ...tickConfigs },
  },
  YAxis: {
    axisLine: false,
    tickLine: false,
    tick: { ...tickConfigs }
  },
};
