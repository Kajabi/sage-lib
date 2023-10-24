import React from 'react';
import { Panel } from '../Panel';
import { Table } from './Table';
import { dataCollection } from './sample-data/contacts';
import { domains } from './sample-data/domains';
import { selectArgs } from '../story-support/helpers';
import { SageClassnames } from '../configs';

export default {
  title: 'Sage/Table',
  component: Table,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Basic table component.'
      },
    },
  },
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
    // onSelectRowHook: (data) => {
    //   // Work with returned data set as needed.
    //   console.log(data);
    // }
  }
};
const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Panel>
        {Story()}
      </Panel>
      <div className={`${SageClassnames.TYPE_BLOCK} ${SageClassnames.SPACERS.LG_TOP}`}>
        <p>NOTE: Wiring the select all checkbox requires the following:</p>
        <ul>
          <li>
            Set <code>showSelectAll: true</code> and provide
            <code>selectAllConfigs: &#123; id, name, label &#125;</code>.
          </li>
          <li>
            If desired, used <code>onSelectRowHook</code> to provide
            a callback to respond to selection events throughout the table.
          </li>
          <li>
            If this table has paged data you should also
            set <code>hasDataBeyondCurrentRows: true</code>.
          </li>
        </ul>
      </div>
    </>
  )
];
Default.args = {
  selectable: false
};

export const TableWithRichContent = Template.bind({});
TableWithRichContent.args = {
  hasMenuOptions: true,
  rows: domains,
  selectable: false,
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
        {Story()}
      </Panel>
    </>
  )
];

export const TableWithRichContentAndCheckbox = Template.bind({});
TableWithRichContentAndCheckbox.args = {
  rows: domains,
  hasLeadingInput: true,
  hasMenuOptions: true,
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

TableWithRichContentAndCheckbox.decorators = [
  (Story) => (
    <>
      <Panel>
        <Story />
      </Panel>
    </>
  )
];
