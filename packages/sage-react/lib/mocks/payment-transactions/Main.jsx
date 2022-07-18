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
        actionItems={[
          <OptionsDropdown
            options={transactionPageOptions({ transactionPageOptions })}
            triggerButtonSubtle={false}
          />,
          /*
            TODO: DSS: Search border radius is not as shown in design
            TODO: DSS: Search value change is behaving odd...
              confirm unique to Storybook and not a bigger issue
          */
          <Search
            hideLabel={true}
            id="search_default"
            label="Find"
            onChange={({ target: { value } }) => setSearchValue(value)}
            placeholder="Search transactions..."
            style={{ width: '340px' }}
            value={searchValue}
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
          <b>{currentPage * pageSize} &ndash; {((currentPage + 1) * pageSize) - 1}</b>{' '}
          of{' '}
          <b>{totalItems}</b>{' '}
          transactions in the last{' '}
          <b>{timeframe}</b>
        </p>
        {/*
          TODO: DSS: Look more at the number badge shown in the mock above this button
            https://www.figma.com/file/8wkkXKHaOigsAl5Ye9vaKh/Transactions-page?node-id=1268%3A1704
        */}
        <Button
          icon={SageTokens.ICONS.FILTER}
          color={Button.COLORS.SECONDARY}
          onClick={() => setShowFiltersModal(true)}
        >
          Filters
        </Button>
      </Frame>
      {/*
        TODO: DSS: Are table styles all up to date with what design requests?
        TODO: DSS: Need to ensure table sorting hooks are set up.
        TODO: DSS: Need responsive pattern enacted.
        TODO: DSS: Need to make options cell only visible on hover.
      */}
      <Table
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
