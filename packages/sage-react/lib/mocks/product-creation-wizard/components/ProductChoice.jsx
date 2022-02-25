import React from 'react';
import {
  Choice,
  Card,
  Icon,
  SageClassnames,
  SageTokens
} from '../../..';

export const ProductChoice = ({
  active,
  icon,
  iconColor,
  title,
  onClick,
}) => (
  <Choice isActive={active} onClick={onClick}>
    <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.ET}>
      {/* TODO: Switch out for graphic */}
      <Icon
        icon={icon}
        cardColor={iconColor}
      />
      <p className={`${SageClassnames.TYPE.HEADING_5} t-sage--truncate`}>
        {title}
      </p>
    </Card.Row>
  </Choice>
);
