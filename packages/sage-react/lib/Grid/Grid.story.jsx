import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Grid from './Grid';
import GridNotes from './GridNotes.md';

const GridDemo = ({ children }) => (
  <div style={{
    border: '1px solid lightgrey',
    borderRadius: '4px',
    padding: '16px',
    width: '100%',
    textAlign: 'center',
  }}
  >
    {children}
  </div>
);

GridDemo.propTypes = {
  children: PropTypes.node.isRequired,
};

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

storiesOf('Sage/Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.LG}>
      <Grid.Row spacerBelow="sm">
        {columns.map(col => (
          <Grid.Col size="1" key={col.toString()} aria-label="Single column">
            <GridDemo>
              1 col
            </GridDemo>
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row spacerBelow="sm">
        {columns.map(col => col % 2 === 0 && (
          <Grid.Col size="2" key={col.toString()}>
            <GridDemo>
              2 col
            </GridDemo>
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row spacerBelow="sm">
        {columns.map(col => col % 3 === 0 && (
          <Grid.Col size="3" key={col.toString()}>
            <GridDemo>
              3 col
            </GridDemo>
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row spacerBelow="sm">
        {columns.map(col => col % 4 === 0 && (
          <Grid.Col size="4" key={col.toString()}>
            <GridDemo>
              4 col
            </GridDemo>
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row spacerBelow="sm">
        {columns.map(col => col % 6 === 0 && (
          <Grid.Col size="6" key={col.toString()}>
            <GridDemo>
              6 col
            </GridDemo>
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row spacerBelow="sm">
        <Grid.Col size="7">
          <GridDemo>
            7 col
          </GridDemo>
        </Grid.Col>
        <Grid.Col size="5">
          <GridDemo>
            5 col
          </GridDemo>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row spacerBelow="sm">
        <Grid.Col size="8">
          <GridDemo>
            8 col
          </GridDemo>
        </Grid.Col>
        <Grid.Col size="4">
          <GridDemo>
            4 col
          </GridDemo>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row spacerBelow="sm">
        <Grid.Col size="9">
          <GridDemo>
            9 col
          </GridDemo>
        </Grid.Col>
        <Grid.Col size="3">
          <GridDemo>
            3 col
          </GridDemo>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col size="10">
          <GridDemo>
            10 col
          </GridDemo>
        </Grid.Col>
        <Grid.Col size="2">
          <GridDemo>
            2 col
          </GridDemo>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ), {
    notes: { markdown: GridNotes }
  })
  .add('Containers', () => (
    <Grid container={radios('Container size', Grid.CONTAINER_SIZES, Grid.CONTAINER_SIZES.NONE)}>
      <GridDemo>
        Empty Container
      </GridDemo>
    </Grid>
  ), {
    notes: { markdown: GridNotes }
  });
