import React from 'react';
import { ToolbarEditor } from './ToolbarEditor';

import { SageTokens } from '../configs';
import { Button } from '../Button';

const BaseTemplate = (args) => (
  <div style={{ display: 'flex', width: '100%' }} id="toolbar">
    <ToolbarEditor {...args}>
      <Button
        disclosure={true}
        icon={SageTokens.ICONS.ALIGN_LEFT}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Text align
      </Button>
      <Button
        icon={SageTokens.ICONS.REMOVE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Remove
      </Button>
      <Button
        icon={SageTokens.ICONS.BOLD}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        selected={true}
      >
        Bold
      </Button>
      <Button
        icon={SageTokens.ICONS.ITALIC}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        selected={true}
      >
        Italic
      </Button>
      <Button
        icon={SageTokens.ICONS.UNDERLINE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Underline
      </Button>
      <Button
        icon={SageTokens.ICONS.STRIKETHROUGH}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Strikethrough
      </Button>
      <Button
        icon={SageTokens.ICONS.UNDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Undo
      </Button>
      <Button
        icon={SageTokens.ICONS.REDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Redo
      </Button>
    </ToolbarEditor>
    <ToolbarEditor>
      <Button
        icon={SageTokens.ICONS.ALIGN_LEFT}
        disclosure={true}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Text align
      </Button>
      <Button
        icon={SageTokens.ICONS.REMOVE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Remove
      </Button>
      <Button
        icon={SageTokens.ICONS.BOLD}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Bold
      </Button>
      <Button
        icon={SageTokens.ICONS.ITALIC}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Italic
      </Button>
      <Button
        icon={SageTokens.ICONS.UNDERLINE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Underline
      </Button>
      <Button
        icon={SageTokens.ICONS.STRIKETHROUGH}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        selected={true}
      >
        Strikethrough
      </Button>
      <Button
        icon={SageTokens.ICONS.UNDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Undo
      </Button>
      <Button
        icon={SageTokens.ICONS.REDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      >
        Redo
      </Button>
    </ToolbarEditor>
  </div>
);

export const Default = BaseTemplate.bind({});
