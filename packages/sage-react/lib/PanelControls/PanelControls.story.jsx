import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import uuid from 'react-uuid';
import { withKnobs } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Button, Panel, Table } from '../';
import { getNews } from '../services/newsapi';
import PanelControls from './PanelControls';

// TODO: Consider how select all affects all items
// when only one page is currently selected

const PanelControlsWithData = () => {
  const [selfData, setSelfData] = useState({
    // Set locally
    articles: [],
    selectedRows: [],

    // Panel Controls Configurations
    panelControlConfigs: {
      currentPage: 1,
      itemsOnThisPage: 0,
      numSelectedRows: 0,
      pageSize: 1,
      rowNoun: {
        singular: 'article',
        plural: 'articles',
      },
      selectionType: PanelControls.SELECTION_TYPES.NONE,
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

    console.log(data);

    const formattedArticles = articles.map(({ _id, title, author, link, published_date, }) => {
      return {
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
      };
    });

    setSelfData({
      // Bring over all existing selfData props
      ...selfData,
      // Rewrite articles to contain those returned by service
      articles: formattedArticles,
      // Rewrite the panelControlConfigs
      panelControlConfigs: {
        // First bring over all existing props
        ...selfData.panelControlConfigs,
        // Rewrite those changed by this API result
        currentPage,
        itemsOnThisPage: articles.length,
        pageSize,
        totalPages,
        totalItems,
      },
    });
  };

  // Gets new data from the API
  const fetchData = async (page) => {
    const data = await getNews(page);
    
    if (data && data.status === 'ok') {
      transformNewsData(data)
    }
  };


  //
  // Effects
  //

  // Get first page of data on load
  useEffect(() => {
    fetchData(1);
  }, []);


  //
  // Render
  //

  return (
    <Panel>
      <PanelControls
        controlSettings={{ ...selfData.panelControlConfigs }}
        onRequestChange={(data) => PanelControls.handlerUtils.handleChange({
          data,
          stateData: selfData,
          setStateDataFn: setSelfData,
          pageChangeHandlerFn: fetchData,
        })}
      />
      <Table
        onSelectRowHook={(data) => PanelControls.handlerUtils.handleSelection({
          data,
          stateData: selfData,
          setStateDataFn: setSelfData,
        })}
        resetAbove={true}
        resetBelow={true}
        rows={selfData.articles}
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
    </Panel>
  );
}

storiesOf('Sage/Panel Controls', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <PanelControlsWithData />
  ));
