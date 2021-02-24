import React, { useState } from 'react';
import uuid from 'react-uuid';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { Panel } from '../Panel';
import { Typeahead } from './Typeahead';
import { searchNews } from '../services/newsapi';

const TypeaheadWithAPI = () => {
  const [items, setItems] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const searchFn = async (value) => {
    const news = await searchNews(value);
    if (!news || !news.articles) {
      return;
    }

    setItems(news.articles.map(({ title, author, link }) => ({
      icon: SageTokens.ICONS.URL,
      onClick: () => setSelectedArticle({ title, author, link }),
      subtitle: author || '',
      title,
    })));
  };

  return (
    <Panel.Stack>
      <Typeahead
        filterFn={null}
        items={items}
        maxResults={5}
        searchFn={searchFn}
        onClearHook={() => setSelectedArticle(null)}
      />
      {selectedArticle && (
        <a href={selectedArticle.link} rel="noopener noreferrer" target="_blank">
          {selectedArticle.title}
        </a>
      )}
    </Panel.Stack>
  );
};

const itemActions = [
  <Button
    color={Button.COLORS.SECONDARY}
    icon={SageTokens.ICONS.PEN}
    iconOnly={true}
    subtle={true}
  >
    Edit
  </Button>,
  <Button
    color={Button.COLORS.SECONDARY}
    icon={SageTokens.ICONS.ARROW_DOWN}
    iconOnly={true}
    subtle={true}
  >
    Scroll To Location
  </Button>
];

const items = [
  {
    icon: SageTokens.ICONS.FOLDER,
    title: 'Wonderful Instruments',
    actions: itemActions,
    tabIndex: 0,
    onClick: () => console.log('Wonderful Instruments'), // eslint-disable-line
  },
  {
    icon: SageTokens.ICONS.ASSESSMENT,
    title: 'Dinged Up Dirty Guitar',
    subTitle: 'Wonderful Instruments / Ones That Need Love /',
    actions: itemActions,
    tabIndex: 0,
    onClick: () => console.log('Dinged Up Dirty Guitar'), // eslint-disable-line
  },
  {
    icon: SageTokens.ICONS.VIDEO_ON,
    title: 'Purple & Pink Plastic Violins',
    subTitle: 'Wonderful Instruments /',
    actions: itemActions,
    tabIndex: 0,
    onClick: () => console.log('Purple & Pink Plastic Violins'), // eslint-disable-line
  },
  {
    icon: SageTokens.ICONS.ARROW_CORNER,
    title: 'Greasy Tuba',
    subTitle: 'Wonderful Instruments /',
    actions: itemActions,
    tabIndex: 0,
    onClick: () => console.log('Greasy Tuba'), // eslint-disable-line
  },
];

storiesOf('Sage/Typeahead', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <div style={{ width: 500 }}>
      <Typeahead
        items={items}
        maxResults={number('Maximum Results', 5)}
      />
      <p style={{ marginTop: 50 }}>
        Search for&hellip;
        {items.map((item) =>
          <span key={uuid()}><br />{item.title}</span>
        )}
      </p>
    </div>
  ))
  .add('With API', () => (
    <div style={{ width: 500 }}>
      <TypeaheadWithAPI />
    </div>
  ));
