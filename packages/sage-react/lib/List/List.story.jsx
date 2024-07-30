import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens, SageClassnames } from '../configs';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Card } from '../Card';
import { Link } from '../Link';
import { OptionsDropdown } from '../Dropdown';
import { Property } from '../Property';
import { List } from './List';
import { ListItem } from './ListItem';
import placeholderImg from '../../public/CardPlaceholderLarge.png';
import {
  sampleItems,
  sampleItemRenderer,
} from './story-helper';

export default {
  title: 'Sage/List',
  component: List,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Set up neatly-formatted lists of content in bordered rows with some additional optional decorations.'
      },
    },
  },
  subcomponents: {
    'List.Item': ListItem,
  },
  argTypes: {
    ...selectArgs({
      dragHandleType: List.DRAG_HANDLE_TYPES,
    }),
  },
  args: {
    items: [],
  },
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
  itemRenderer: sampleItemRenderer,
};

export const SortableList = () => {
  const [items, setItems] = React.useState(sampleItems);
  return (
    <List
      items={items}
      itemRenderer={sampleItemRenderer}
      setList={setItems}
      sortable={true}
    />
  );
};

export const FullyDraggableSortableList = () => {
  const [items, setItems] = React.useState(sampleItems);
  return (
    <List
      dragHandleType={List.DRAG_HANDLE_TYPES.ROW}
      items={items}
      itemRenderer={sampleItemRenderer}
      setList={setItems}
      sortable={true}
    />
  );
};

export const otherActionItems = () => (
  <List>
    {[...Array(5)].map((x, i) => (
      <ListItem
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        id={`list-item-${i}`}
      >
        <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.ETE}>
          <img
            src={placeholderImg}
            width="120"
            height="64"
            alt=""
          />
          <Card.Stack>
            <Link
              className={`${SageClassnames.TYPE.HEADING_4}`}
              href="/"
              removeUnderline
              style={`${Link.COLORS.SECONDARY}`}
            >
              Plain link
            </Link>
            <Property.Group>
              <Property icon="users-alt">Property</Property>
              <Property icon="users-alt">Property</Property>
              <Property icon="users-alt">Property</Property>
            </Property.Group>
          </Card.Stack>
          <Button.Group align="end" gap="md">
            <Badge isInteractive={false} value="Label" color="published" />
            <Button icon="preview-on" iconOnly onClick={() => {}} subtle>
              Preview
            </Button>
            <Button icon="pen" iconOnly onClick={() => {}} subtle>
              Edit
            </Button>
            <OptionsDropdown
              align="right"
              options={[
                {
                  id: 1,
                  label: 'Option 1',
                },
                {
                  id: 2,
                  label: 'Option 2',
                },
                {
                  id: 3,
                  label: 'Option 3',
                },
              ]}
              triggerButtonSubtle={true}
            />
          </Button.Group>
        </Card.Row>
      </ListItem>
    ))}
  </List>
);
