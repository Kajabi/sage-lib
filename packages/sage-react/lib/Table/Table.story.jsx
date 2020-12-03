import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../story-support/decorators';
import Panel from '../Panel';
import Table from '../Table';
import { sample1 } from './storyHelper';
// import PanelNotes from './PanelNotes.md';

storiesOf('Sage/Table', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Panel>
      <Table
        resetAbove={true}
        resetBelow={true}
        headers={sample1.headers}
        isStriped={true}
        rows={sample1.rows}
        schema={sample1.schema}
      />
    </Panel>
  ), {
    // notes: { markdown: PanelFigureNotes }
  });
