import React from 'react';
import PropTypes from 'prop-types';
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
  onClick,
  title,
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

ProductChoice.defaultProps = {
  active: false,
  icon: Icon.ICONS.BAN,
  iconColor: Icon.CARD_COLORS.INFO,
  onClick: () => null,
  title: '',
};

ProductChoice.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)),
  iconColor: PropTypes.oneOf(Object.values(Icon.CARD_COLORS)),
  onClick: PropTypes.func,
  title: PropTypes.string,
};
