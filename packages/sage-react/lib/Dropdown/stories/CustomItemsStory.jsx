/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../../configs';
import { Card, Icon } from '../..';
import { Dropdown } from '..';

const ProductCard = ({ label, subtext, icon, color }) => (
  <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.ET}>
    <Icon icon={icon} cardColor={color} />
    <Card.Block>
      <h4>{label}</h4>
      <p>{subtext}</p>
    </Card.Block>
  </Card.Row>
);

ProductCard.defaultProps = {
  label: 'Default label',
  subtext: 'Default subtext',
  icon: SageTokens.ICONS.QUESTION,
  color: Icon.CARD_COLORS.DRAFT,
};

ProductCard.propTypes = {
  label: PropTypes.string,
  subtext: PropTypes.string,
  icon: Icon.propTypes.icon,
  color: Icon.propTypes.cardColor,
};

export const CustomItemsStory = () => {
  const initialLabel = 'Select a product';
  const items = [
    {
      id: 1,
      label: 'Lorem ipsum',
      subtext: 'Dolor sit amet',
      icon: SageTokens.ICONS.PEN,
      color: Icon.CARD_COLORS.INFO,
    },
    {
      id: 2,
      label: 'Consectetur',
      subtext: 'Adipiscing elit',
      icon: SageTokens.ICONS.MICROPHONE,
      color: Icon.CARD_COLORS.PUBLISHED,
    },
    {
      id: 3,
      label: 'Nullam ultrices',
      subtext: 'Turpis orci',
      icon: SageTokens.ICONS.VIDEO_ON,
      color: Icon.CARD_COLORS.DANGER,
    },
  ];
  const [label, setLabel] = useState(initialLabel);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleClickItem = (data) => {
    const item = items.find((obj) => obj.id === data.id);

    if (item) {
      setSelectedContent((
        <ProductCard {...item} />
      ));
      setLabel('');
    } else {
      setSelectedContent(null);
      setLabel(initialLabel);
    }
  };

  return (
    <Dropdown
      contained={true}
      customTrigger={(
        <Dropdown.TriggerSelect
          label={label}
          selectedValue={selectedContent}
        />
      )}
      label="Select a product..."
      panelModifier="select"
      triggerModifier="select"
      exitPanelHandler={handleClickItem}
    >
      <Dropdown.ItemList
        items={items.map((item) => ({
          customComponent: ProductCard,
          id: item.id,
          label: item.label,
          payload: { ...item },
        }))}
      />
    </Dropdown>
  );
};
