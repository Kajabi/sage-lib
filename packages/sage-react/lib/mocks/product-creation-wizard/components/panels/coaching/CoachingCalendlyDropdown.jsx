/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Dot,
  Icon,
  Dropdown,
  SageTokens,
  SageClassnames
} from '../../../../..';

const CoachingCalendlyDropdownCard = ({ label, subtext, color }) => (
  <Card.Row verticalAlign="start" gridTemplate={SageTokens.GRID_TEMPLATES.ET}>
    <Card.Block>
      <h4 className={`${SageClassnames.TYPE.BODY_MED} t-sage--truncate`}>
        <Dot color={color} />{' '}
        {label}
      </h4>
      <p
        className={`${SageClassnames.TYPE.BODY_MED} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}
        style={{ marginLeft: '12px' }}
      >
        {subtext}
      </p>
    </Card.Block>
  </Card.Row>
);

CoachingCalendlyDropdownCard.defaultProps = {
  label: 'Default label',
  subtext: 'Default subtext',
  color: Icon.CARD_COLORS.DRAFT,
};

CoachingCalendlyDropdownCard.propTypes = {
  label: PropTypes.string,
  subtext: PropTypes.string,
  color: Icon.propTypes.cardColor,
};

export const CoachingCalendlyDropdown = ({
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
        <CoachingCalendlyDropdownCard {...item} />
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
      label="Event type"
      panelModifier="select"
      triggerModifier="select"
      exitPanelHandler={handleClickItem}
    >
      <Dropdown.ItemList
        items={items.map((item) => ({
          customComponent: CoachingCalendlyDropdownCard,
          id: item.id,
          label: item.label,
          payload: { ...item },
        }))}
      />
    </Dropdown>
  );
};
