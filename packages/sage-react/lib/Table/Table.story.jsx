import React, { useState } from 'react';
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
        {Story()}
      </Panel>
    </>
  )
];

export const TableWithSortableHeaders = () => {
  const [sorts, setSorts] = useState([
    {
      field: 'first',
      direction: 'descending',
      active: true,
    },
    {
      field: 'phone',
      direction: null,
      active: false,
    },
  ]);

  const getSortByField = (sortedField) => {
    const selectedField = sorts.filter(({ field }) => field === sortedField);
    if (selectedField.length !== 1) return null;
    return selectedField[0];
  };

  const sortBy = (clickedField) => setSorts(sorts.map(({ field, direction, active }) => {
    if (field === clickedField) {
      active = true;
      direction = direction === 'descending' ? 'ascending' : 'descending';
    } else {
      active = false;
      direction = null;
    }

    // NOTE: We would now reload the data set in some fashion.

    return { field, direction, active };
  }));

  return (
    <>
      <Panel>
        <Table
          schema={{
            id: false,
            first: {
              label: (
                <Table.SortableHeading
                  active={getSortByField('first').active}
                  direction={getSortByField('first').direction}
                  onClick={() => sortBy('first')}
                >
                  First name
                </Table.SortableHeading>
              ),
            },
            email: false,
            phone: {
              label: (
                <Table.SortableHeading
                  active={getSortByField('phone').active}
                  direction={getSortByField('phone').direction}
                  onClick={() => sortBy('phone')}
                >
                  Phone
                </Table.SortableHeading>
              )
            }
          }}
          rows={dataCollection}
          selectable={false}
          sortable={true}
        />
      </Panel>
    </>
  );
};
