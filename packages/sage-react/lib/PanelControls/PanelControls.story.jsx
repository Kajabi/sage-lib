import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import uuid from 'react-uuid';
import { withKnobs } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Button, Panel, Table } from '../';
import { getNews } from '../services/newsapi';
import PanelControls from './PanelControls';

const PanelControlsWithData = () => {
  const [selfData, setSelfData] = useState({
    articles: [],
    itemsOnThisPage: 0,
    page: 1,
    pageSize: 1,
    totalPages: 1,
    selectedRows: [],
    totalItems: 0,
  });

  const transformNewsData = (data) => {
    const {
      articles,
      page,
      total_pages: totalPages,
      page_size: pageSize,
      total_hits: totalItems,
    } = data;

    const formattedArticles = articles.map(({ _id, title, author, link, publised, }) => {
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
        publised,
      };
    });

    setSelfData({
      articles: formattedArticles,
      itemsOnThisPage: articles.length,
      page,
      pageSize,
      totalPages,
      totalItems,
    });
  };

  const fetchData = async (page) => {
    const data = await getNews(page);
    
    if (data && data.status === 'ok') {
      transformNewsData(data)
    }
  };

  const handleRequestChange = (data) => {
    if (data.page) {
      fetchData(data.page);
      return;
    }
    
    let selectionType, selectedRows;
    if (data.selectAll !== undefined && data.selectAll) {
      selectionType  = PanelControls.SELECTION_TYPES.ALL;
      selectedRows = selfData.articles.map(({ id }) => id);
    } else if (data.selectAll !== undefined) {
      selectionType  = PanelControls.SELECTION_TYPES.NONE;
      selectedRows = [];
    }

    setSelfData({
      ...selfData,
      selectionType,
      selectedRows,
    })
    return;
  };

  const handleSelectRow = (data) => {
    const { selectedRows } = data;

    let selectionType;
    if (selectedRows.length === selfData.totalItems) {
      selectionType = PanelControls.SELECTION_TYPES.ALL;
    } else if (selectedRows.length > 0) {
      selectionType = PanelControls.SELECTION_TYPES.PARTIAL;
    } else {
      selectionType = PanelControls.SELECTION_TYPES.NONE;
    }

    setSelfData({
      ...selfData,
      selectedRows,
      selectionType,
    })
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <Panel>
      <PanelControls
        controlSettings={{
          currentPage: selfData.page,
          itemsOnThisPage: selfData.itemsOnThisPage,
          pageSize: selfData.pageSize,
          rowNoun: {
            singular: 'article',
            plural: 'articles',
          },
          numSelectedRows: selfData.selectedRows ? selfData.selectedRows.length : 0,
          selectionType: selfData.selectionType,
          totalPages: selfData.totalPages,
          totalItems: selfData.totalItems,
        }}
        onRequestChange={handleRequestChange}
      />
      <Table
        onSelectRowHook={handleSelectRow}
        resetAbove
        resetBelow
        rows={selfData.articles}
        schema={{
          title: {
            label: 'Title',
            dataType: Table.DATA_TYPES.HTML,
          },
          author: {
            label: 'Author',
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
