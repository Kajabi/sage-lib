import React from 'react';
import {
  Button,
  Panel,
  SageClassnames,
  Table,
} from '../../..';
import { sampleTransactions } from '../data-helper';

export const RecentTransactionsTable = () => {
  const schema = {
    price: {
      dataType: Table.DATA_TYPES.HTML,
      style: {
        textAlign: 'right',
        width: '150px',
      }
    },
    name: {
      dataType: Table.DATA_TYPES.STRING,
    },
    when: {
      dataType: Table.DATA_TYPES.DATE,
      style: {
        textAlign: 'right',
        width: '150px',
      }
    },
  };

  // TODO: Fetch data from an API call?
  const [rows] = React.useState(sampleTransactions);

  return (
    <Panel>
      <h3 className={SageClassnames.TYPE.HEADING_5}>
        Recent transactions
      </h3>
      {/* TODO: Add ability to hide table header row */}
      <Table
        selectable={false}
        schema={schema}
        rows={rows}
      />
      <div>
        <Button
          href="#TODO-dev-all-transactions-url"
          subtle={true}
          color={Button.COLORS.PRIMARY}
        >
          All transactions
        </Button>
      </div>
    </Panel>
  );
};
