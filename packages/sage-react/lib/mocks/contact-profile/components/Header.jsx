import React from 'react';
import {
  Button,
  Panel,
  SageTokens,
} from '../../..';

export const Header = ({}) => (
  <Panel.Row gridTemplate={SageTokens.GRID_TEMPLATES.TE}>
    <Button
      color={Button.COLORS.SECONDARY}
      href="#TODO-open-full-profile"
      icon={SageTokens.ICONS.EXPAND}
      iconPosition={Button.ICON_POSITIONS.LEFT}
      subtle={true}
      small={true}
    >
      Open full profile
    </Button>
    <Button
      color={Button.COLORS.SECONDARY}
      href="#TODO-close-preview"
      icon={SageTokens.ICONS.REMOVE}
      iconOnly={true}
      subtle={true}
    >
      Close preview
    </Button>
  </Panel.Row>
);
