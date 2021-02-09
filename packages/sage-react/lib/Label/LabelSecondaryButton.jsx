import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const LabelSecondaryButton = ({
  icon,
  label,
  ...rest
}) => (
  <Button
    color={Button.COLORS.SECONDARY}
    icon={icon}
    iconOnly={true}
    subtle={true}
    {...rest}
  >
    Remove
  </Button>
);

LabelSecondaryButton.defaultProps = {
  icon: SageTokens.ICONS.REMOVE,
  label: 'Remove',
};

LabelSecondaryButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
};
