/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Button } from '../Button';
import { EmptyState } from '../EmptyState';
import { Grid } from '../Grid';
import { Panel } from '../Panel';
import { Table } from '../Table';
import { getNews } from '../services/newsapi';
import { PanelControls } from './PanelControls';

/* eslint-disable react-hooks/exhaustive-deps */

// TODO: Consider how select all affects all items
// when only one page is currently selected

export default {
  title: 'Sage/PanelControls',
  component: PanelControls,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Panel controls provides a unified interface for controlling lists inside of a panel.'
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Story()}</div>],
  args: {
    children: (
      <p>
        <strong>Note:</strong>
        This component story uses the Rapid API Newscatcher service,
        which requires an API key to be provided.
      </p>
    )
  },
};

export const Default = (args) => {
  const [selfData, setSelfData] = useState({
    // Set locally
    items: [],
    selectedRows: [],

    // Panel Controls Configurations
    panelControlConfigs: {
      bulkActionsItems: [
        {
          id: 'action-1',
          label: 'Action 1'
        },
        {
          id: 'action-2',
          label: 'Action 2',
        },
      ],
      currentPage: 1,
      itemsOnThisPage: 0,
      numSelectedRows: 0,
      pageSize: 50,
      pageSizeOptions: [25, 50, 100],
      pageSizeOptionSuffix: ' / pg',
      rowNoun: {
        singular: 'article',
        plural: 'articles',
      },
      selectionType: PanelControls.SELECTION_TYPES.NONE,
      showDefaultToolbar: false,
      sortOptions: [
        {
          id: 'sort-title',
          label: 'Title',
        },
        {
          id: 'sort-date',
          label: 'Publish date',
        }
      ],
      totalItems: 0,
      totalPages: 1,
    }
  });

  //
  // API-related functions
  //

  // Transforms API data into format for this table
  const transformNewsData = (data) => {
    const {
      articles,
      page: currentPage,
      total_pages: totalPages,
      page_size: pageSize,
      total_hits: totalItems,
    } = data;

    const formattedArticles = articles.map(({ _id, title, author, link, published_date, }) => ({
      id: _id || uuid(),
      title: (
        <Button
          small={true}
          subtle={true}
          color={Button.COLORS.PRIMARY}
          style={{ maxWidth: '200px' }}
          href={link}
        >
          {title}
        </Button>
      ),
      author,
      published: published_date,
    }));

    setSelfData({
      // Bring over all existing selfData props
      ...selfData,
      // Rewrite articles to contain those returned by service
      items: formattedArticles,
      // Rewrite the panelControlConfigs
      panelControlConfigs: {
        // First bring over all existing props
        ...selfData.panelControlConfigs,
        // Rewrite those changed by this API result
        currentPage,
        itemsOnThisPage: formattedArticles.length,
        pageSize,
        showDefaultToolbar: formattedArticles.length > 0,
        totalPages,
        totalItems,
      },
    });
  };

  // Gets new data from the API
  const fetchData = async (page) => {
    const data = await getNews(page);

    if (data && data.status === 'ok') {
      transformNewsData(data);
    }
  };

  //
  // Effects
  //

  // Get first page of data on load
  useEffect(() => {
    fetchData(1);
  }, []);

  const bulkActionshandler = (payload) => {
    console.log('bulk action command recieved', payload); // eslint-disable-line
  };

  const sortActionsHandler = (payload) => {
    console.log('receieved sorts', payload); // eslint-disable-line
  };

  const pageSizeChangeHandler = (payload) => {
    console.log('receieved page size change', payload); // eslint-disable-line
  };

  //
  // Render
  //

  return (
    <Grid container={Grid.CONTAINER_SIZES.FULL}>
      <Panel>
        <PanelControls
          {...args}
          controlSettings={{ ...selfData.panelControlConfigs }}
          onRequestChange={(data) => PanelControls.handlerUtils.handleChange({
            data,
            stateData: selfData,
            setStateDataFn: setSelfData,
            sortHandlerFn: sortActionsHandler,
            pageChangeHandlerFn: fetchData,
            pageSizeChangeHandlerFn: pageSizeChangeHandler,
            bulkActionsHandlerFn: bulkActionshandler,
          })}
        />
        {selfData.items.length > 0 ? (
          <Table
            onSelectRowHook={(data) => PanelControls.handlerUtils.handleSelection({
              data,
              stateData: selfData,
              setStateDataFn: setSelfData,
            })}
            resetAbove={true}
            resetBelow={true}
            rows={selfData.items}
            schema={{
              title: {
                label: 'Title',
                dataType: Table.DATA_TYPES.HTML,
              },
              author: {
                label: 'Author',
                dataType: Table.DATA_TYPES.STRING,
              },
              published: {
                label: 'Date',
                dataType: Table.DATA_TYPES.STRING,
              }
            }}
            selectedRows={selfData.selectedRows}
          />
        ) : (
          <EmptyState
            title="No Articles"
            text="Sorry but we couldn't find any articles at this time."
          />
        )}
      </Panel>
    </Grid>
  );
};
