import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../story-support/decorators';
import { Panel } from '../Panel';
import { Table } from './Table';
import { dataCollection } from './sample-data/contacts';
import { domains } from './sample-data/domains';

storiesOf('Sage/Table', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Panel>
      <Table
        resetAbove={true}
        resetBelow={true}
        isStriped={true}
        rows={dataCollection}
        headers={{
          first: {
            label: 'Header override'
          }
        }}
        schema={{
          id: false,
          first: {
            label: 'First name',
          },
          email: false,
          phone: {
            label: 'Phone',
          },
        }}
      />
    </Panel>
  ))
  .add('Table with Rich Content', () => (
    <Panel>
      <Table
        selectable={false}
        resetAbove={true}
        resetBelow={true}
        rows={domains}
        schema={{
          domain: {
            label: 'Domain',
            dataType: Table.DATA_TYPES.STRING,
          },
          status: {
            label: 'Status',
            dataType: Table.DATA_TYPES.LABEL,
          },
          options: {
            label: '',
            dataType: Table.DATA_TYPES.HTML,
          },
        }}
      />
    </Panel>
  ));
