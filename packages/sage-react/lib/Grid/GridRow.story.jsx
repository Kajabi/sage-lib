import React from 'react';
import PropTypes from 'prop-types';
import { GridRow } from './GridRow';
import { Grid } from './Grid';

import { Card } from '../Card';
import { HORIZONTAL_ALIGNMENT_TYPES } from './configs';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';

export default {
  title: 'Sage/Grid/GridRow',
  component: GridRow,
  subcomponents: {
    'Grid.Col': Grid.Col
  },
  argTypes: {
    ...selectArgs({
      horizontalAlignment: HORIZONTAL_ALIGNMENT_TYPES,
      spacerAbove: SageTokens.SPACERS,
      spacerBelow: SageTokens.SPACERS
    })
  }
};

const Template = (args) => (
  <Grid>
    <GridRow {...args} />
  </Grid>
);

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const GridDemo = ({ children }) => (
  <Card style={{ textAlign: 'center' }}>
    {children}
  </Card>
);

GridDemo.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      {columns.map((col) => (
        <Grid.Col size="1" key={col.toString()} aria-label="Single column">
          <GridDemo>
            1 col
          </GridDemo>
        </Grid.Col>
      ))}
    </>
  ),
  horizontalAlignment: HORIZONTAL_ALIGNMENT_TYPES.Start,
};
