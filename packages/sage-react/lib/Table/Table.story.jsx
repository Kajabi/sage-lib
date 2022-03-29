import React from 'react';
import { Panel } from '../Panel';
import { Table } from './Table';
import { dataCollection } from './sample-data/contacts';
import { domains } from './sample-data/domains';
import { selectArgs } from '../story-support/helpers';

export default {
  title: 'Sage/Table',
  component: Table,
  argTypes: {
    ...selectArgs({
      captionSide: Table.CAPTION_SIDE
    })
  },
  args: {
    headers: {
      first: {
        label: 'Header override'
      }
    },
    hasDataBeyondCurrentRows: false,
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
    },
    showSelectAll: true,
    selectAllConfigs: {
      id: 'select-all',
      name: 'select-all',
      label: 'Select all items',
    },
    onSelectRowHook: (data) => {
      console.log(data);
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
];

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
};

TableWithRichContent.decorators = [
  (Story) => (
    <>
      <Panel>
        <Story />
      </Panel>
    </>
  )
];
