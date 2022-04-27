import React from 'react';
import {
  Panel,
  SageClassnames,
  SageTokens,
  SelectDropdown,
} from '../../..';
import {
  chartOptions,
  chartDateRangeOptions,
} from '../data-helper';

export const OverviewCharts = () => {
  const [activeChart, setActiveChart] = React.useState(chartOptions[1]);

  const handleSelectChart = (id) => {
    const matchingChart = chartOptions.find((obj) => obj.id === id);
    setActiveChart(matchingChart);
  };

  return (
    <Panel>
      <Panel.Row
        gridTemplate={SageTokens.GRID_TEMPLATES.TI}
        verticalAlign={Panel.Row.VERTICAL_ALIGNMENTS.START}
      >
        <Panel.Block>
          <h3 className={SageClassnames.TYPE.HEADING_5}>
            {activeChart.label || 'No chart selected'}
          </h3>
          {(activeChart && activeChart.description) && (
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}>
              {activeChart.description}
            </p>
          )}
        </Panel.Block>
        <SelectDropdown
          customized
          initialSelectedValue={chartOptions[1].label}
          items={chartOptions.map(({ label, id }) => ({
            label,
            id,
            onClick: () => handleSelectChart(id),
          }))}
          triggerWidth="120px"
        />
        <SelectDropdown
          customized
          initialSelectedValue={chartDateRangeOptions[0].label}
          items={chartDateRangeOptions}
          triggerWidth="150px"
        />
      </Panel.Row>
      {/* TODO: Need to sync with existing charting options */}
      [Chart goes here {/* TODO: This can pair with activeChart.dataSet when wired */}]
    </Panel>
  );
};
