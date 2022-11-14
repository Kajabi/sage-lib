import React from 'react';
import { Toolbar } from './Toolbar';
import { ToolbarEditor } from './ToolbarEditor';

import { SageTokens } from '../configs';
import { Button } from '../Button';

const BaseTemplate = (args) => (
  <Toolbar gap={Toolbar.GAP_OPTIONS.XS}>
    <ToolbarEditor {...args}>
      <Button
        disclosure={true}
        icon={SageTokens.ICONS.ALIGN_LEFT}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        value="Text align"
      />
      <Button
        icon={SageTokens.ICONS.REMOVE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.BOLD}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        selected={true}
      />
      <Button
        icon={SageTokens.ICONS.ITALIC}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        selected={true}
      />
      <Button
        icon={SageTokens.ICONS.UNDERLINE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.STRIKETHROUGH}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.UNDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.REDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
    </ToolbarEditor>
    <ToolbarEditor>
      <Button
        icon={SageTokens.ICONS.ALIGN_LEFT}
        disclosure={true}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        value="Text align"
      />
      <Button
        icon={SageTokens.ICONS.REMOVE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.BOLD}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.ITALIC}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.UNDERLINE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.STRIKETHROUGH}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        selected={true}
      />
      <Button
        icon={SageTokens.ICONS.UNDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.REDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
    </ToolbarEditor>
  </Toolbar>
);

export const Default = BaseTemplate.bind({});
