import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { centerXY } from '../story-support/decorators';
import { Panel } from '../Panel';
import { Table } from './Table';
import { dataCollection } from './sample-data/contacts';
import { domains } from './sample-data/domains';

export default {
  title: 'Sage/Table',
  component: Table,
  args: {
    headers: {
      first: {
        label: 'Header override'
      }
    },
    rows: dataCollection,
    schema: {
      id: false,
      first: {
        label: 'First name',
      },
      email: false,
      phone: {
        label: 'Phone'
      }
    }
  }
};
const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Panel>
        <Story />
      </Panel>
    </>
  )
]

export const TableWithRichContent = Template.bind({});
TableWithRichContent.args = {
  rows: domains,
  schema: {
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
  }
}

TableWithRichContent.decorators = [
  (Story) => (
    <>
      <Panel>
        <Story />
      </Panel>
    </>
  )
]
