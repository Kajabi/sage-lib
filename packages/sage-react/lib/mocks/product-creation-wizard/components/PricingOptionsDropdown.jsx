/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Icon,
  Dropdown,
  SageTokens
} from '../../..';

const PricingOptionsDropdownCard = ({ label, subtext, icon, color }) => (
  <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.ET}>
    <Icon icon={icon} cardColor={color} />
    <Card.Block>
      <h4>{label}</h4>
      <p>{subtext}</p>
    </Card.Block>
  </Card.Row>
);

PricingOptionsDropdownCard.defaultProps = {
  label: 'Default label',
  subtext: 'Default subtext',
  icon: SageTokens.ICONS.QUESTION,
  color: Icon.CARD_COLORS.DRAFT,
};

PricingOptionsDropdownCard.propTypes = {
  label: PropTypes.string,
  subtext: PropTypes.string,
  icon: Icon.propTypes.icon,
  color: Icon.propTypes.cardColor,
};

export const PricingOptionsDropdown = ({
  initialLabel,
  items,
  onSelectItem,
}) => {
  const [label, setLabel] = useState(initialLabel);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleClickItem = (data) => {
    const item = items.find((obj) => obj.id === data.id);

    if (item) {
      setSelectedContent((
        <PricingOptionsDropdownCard {...item} />
      ));
      setLabel('');
    } else {
      setSelectedContent(null);
      setLabel(initialLabel);
    }

    onSelectItem(data);
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
          customComponent: PricingOptionsDropdownCard,
          id: item.id,
          label: item.label,
          payload: { ...item },
        }))}
      />
    </Dropdown>
  );
};
