import React from 'react';
import uuid from 'react-uuid';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { Typeahead } from './Typeahead';

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
  ));
