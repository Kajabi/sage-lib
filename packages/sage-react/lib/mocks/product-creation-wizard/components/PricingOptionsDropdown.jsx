/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Icon,
  Dropdown,
  SageTokens
} from '../../..';

const PricingOptionsDropdownCard = ({
  color,
  icon,
  label,
  subtext,
}) => (
  <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.ET}>
    <Icon icon={icon} cardColor={color} />
    <Card.Block>
      <h4>{label}</h4>
      <p>{subtext}</p>
    </Card.Block>
  </Card.Row>
);

PricingOptionsDropdownCard.defaultProps = {
  color: Icon.CARD_COLORS.DRAFT,
  icon: SageTokens.ICONS.QUESTION,
  label: 'Default label',
  subtext: 'Default subtext',
};

PricingOptionsDropdownCard.propTypes = {
  color: Icon.propTypes.cardColor,
  icon: Icon.propTypes.icon,
  label: PropTypes.string,
  subtext: PropTypes.string,
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
      label="Select..."
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

PricingOptionsDropdown.defaultProps = {
  initialLabel: '',
  items: [],
  onSelectItem: (data) => null,
};

PricingOptionsDropdown.propTypes = {
  initialLabel: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  })),
  onSelectItem: PropTypes.func,
};
