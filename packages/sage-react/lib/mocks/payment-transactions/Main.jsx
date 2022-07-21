import React, { useState } from 'react';
import {
  Button,
  Frame,
  Grid,
  OptionsDropdown,
  PageHeading,
  Pagination,
  SageClassnames,
  SageTokens,
  Search,
  Table,
} from '../..';
import { ModalCustomizeColumns, ModalFilters } from './components';
import { PriceField } from './components/PriceField';
import {
  transactionItemOptions,
  transactionPageOptions,
  transactionsTableData,
  transactionsTableSchema,
} from './data-helper';

export const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(25); // TODO: Dev: Wire to page size selection/default
  const [searchValue, setSearchValue] = useState('');
  const [showCustomizeColumnsModal, setShowCustomizeColumnsModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [timeframe] = useState('30 days'); // TODO: Dev: Wire to timeframe selection
  const [totalItems] = useState(112); // TODO: Dev: Wire to accurate total item count

  // TODO: Dev: wire page change to service to load new page
  const onClickPage = (newPage) => setCurrentPage(newPage);

  return (
    <Grid container={Grid.CONTAINER_SIZES.FULL}>
      <PageHeading
        // TODO: DSS: `actionItems` should not be an array but just nodes as children.
        //   https://kajabi.atlassian.net/browse/SAGE-752
        actionItems={[
          <OptionsDropdown
            options={transactionPageOptions({ setShowCustomizeColumnsModal })}
            triggerButtonSubtle={false}
            align={OptionsDropdown.POSITIONS.RIGHT}
          />
        ]}
        className={SageClassnames.SPACERS.LG_BOTTOM}
      >
        Transactions
      </PageHeading>
      <Frame
        direction={Frame.DIRECTIONS.HORIZONTAL}
        align={Frame.ALIGNMENTS.CENTER_SPREAD}
        className={SageClassnames.SPACERS.MD_BOTTOM}
      >
        <p className={[SageClassnames.TYPE.BODY, SageClassnames.TYPE_COLORS.CHARCOAL_400].join(' ')}>
          Displaying{' '}
          <b>{(currentPage - 1) * pageSize + 1} &ndash; {currentPage * pageSize}</b>{' '}
          of{' '}
          <b>{totalItems}</b>{' '}
          transactions in the last{' '}
          <b>{timeframe}</b>
        </p>

        <Frame
          direction={Frame.DIRECTIONS.HORIZONTAL}
          align={Frame.ALIGNMENTS.CENTER_SPREAD}
          width={Frame.WIDTHS.HUG}
        >
          <Search
            contained={true}
            hideLabel={true}
            id="transaction-search"
            label="Find"
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search transactions..."
            style={{ width: '340px' }}
            value={searchValue}
          />
          {/*
            TODO: DSS: Need design specs to add the "number" badge as shown here
              https://www.figma.com/file/8wkkXKHaOigsAl5Ye9vaKh/Transactions-page?node-id=1268%3A1704
              https://kajabi.atlassian.net/browse/SAGE-755
              DESIGN spec needed
          */}
          <Button
            icon={SageTokens.ICONS.FILTER}
            color={Button.COLORS.SECONDARY}
            onClick={() => setShowFiltersModal(true)}
          >
            Filters
          </Button>
        </Frame>
      </Frame>
      {/*
        TODO: DSS: Sync to latest table styles
          https://kajabi.atlassian.net/browse/SAGE-756
          DESIGN specs needed
        TODO: DSS: Need responsive pattern enacted
          https://kajabi.atlassian.net/browse/SAGE-757
          DESIGN specs needed
        TODO: DSS: Need to ensure table sorting hooks are set up.
          https://kajabi.atlassian.net/browse/SAGE-758
      */}
      <Table
        className={SageClassnames.SPACERS.MD_BOTTOM}
        isResponsive={false}
        schema={transactionsTableSchema}
        selectable={false}
        rows={transactionsTableData.map(({
          id,
          price,
          type,
          name,
          email,
          offerName,
          date,
        }) => ({
          price: <PriceField {...price} />,
          type,
          name,
          email,
          offerName,
          date,
          options: (
            <OptionsDropdown
              align={OptionsDropdown.POSITIONS.RIGHT}
              isPinned={false}
              options={transactionItemOptions({ id })}
            />
          ),
        }))}
      />
      <Pagination
        currentPage={currentPage}
        hideCounter={true}
        itemsTotalCount={totalItems}
        onClickPage={onClickPage}
        pageSize={pageSize}
        /*
          TODO: DSS: Adjust how pagination is calculated here;
            odd to have to set pageSize to null...
            https://kajabi.atlassian.net/browse/SAGE-751
        */
        pageCount={null}
      />
      <ModalCustomizeColumns
        active={showCustomizeColumnsModal}
        onExit={() => setShowCustomizeColumnsModal(false)}
      />
      <ModalFilters
        active={showFiltersModal}
        onExit={() => setShowFiltersModal(false)}
      />
    </Grid>
  );
};
