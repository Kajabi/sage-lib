import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Drawer,
  SageTokens,
  Tabs,
} from '../../..';
import {
  InfoTab,
  OffersTab,
  ProductsTab,
  TagsTab,
} from './tabs';

export const Root = ({ modalActive, onExitModal }) => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('info');

  return (
    <Drawer
      // TODO: Need expanded option built into Drawer
      // https://kajabi.atlassian.net/browse/SAGE-361

      // TODO: need to make background blur/dismiss a configurable option in drawer
      // so that it can be toggled as the drawer expands when desired.
      // https://kajabi.atlassian.net/browse/SAGE-376
      className={expanded ? 'sage-drawer--expanded' : null}
      active={modalActive}
      onExit={onExitModal}
      showClose={true}
      customHeader={(
        <>
          {expanded ? (
            <Button
              color={Button.COLORS.SECONDARY}
              icon={SageTokens.ICONS.ARROW_RIGHT}
              // TODO: Need correct expand/collapse icons
              // https://kajabi.atlassian.net/browse/SAGE-375
              iconPosition={Button.ICON_POSITIONS.LEFT}
              onClick={() => setExpanded(false)}
              subtle={true}
            >
              Collapse
            </Button>
          ) : (
            <Button
              color={Button.COLORS.SECONDARY}
              icon={SageTokens.ICONS.ARROW_LEFT}
              // TODO: Need correct expand/collapse icons
              // https://kajabi.atlassian.net/browse/SAGE-375
              iconPosition={Button.ICON_POSITIONS.LEFT}
              onClick={() => setExpanded(true)}
              subtle={true}
            >
              Expand
            </Button>
          )}
        </>
      )}
    >
      <Grid.Row>
        <Grid.Col size={expanded ? 4 : 12}>
          <p>Sidebar (see prior mocks)</p>
        </Grid.Col>
        {expanded && (
          <Grid.Col size={8}>
            <Tabs
              alignItemsCenter={true}
              initialActiveId={`contact-profile-${activeTab}`}
              tabs={[
                {
                  id: 'contact-profile-info',
                  label: 'Info',
                  content: <InfoTab />,
                  onClickTab: () => setActiveTab('info'),
                },
                {
                  id: 'contact-profile-products',
                  label: 'Products',
                  content: <ProductsTab />,
                  onClickTab: () => setActiveTab('products'),
                },
                {
                  id: 'contact-profile-offers',
                  label: 'Offers',
                  content: <OffersTab />,
                  onClickTab: () => setActiveTab('offers'),
                },
                {
                  id: 'contact-profile-tags',
                  label: 'Tags',
                  content: <TagsTab />,
                  onClickTab: () => setActiveTab('tags'),
                }
              ]}
              // TODO: Grid row in this context causes sideways scroll bar
              // without this local style override
              // https://kajabi.atlassian.net/browse/SAGE-377
              style={{ justifyContent: 'center' }}
            />
          </Grid.Col>
        )}
      </Grid.Row>
    </Drawer>
  );
};

Root.defaultProps = {
  modalActive: false,
  onExitModal: () => null,
};

Root.propTypes = {
  modalActive: PropTypes.bool,
  onExitModal: PropTypes.func,
};

export default Root;
