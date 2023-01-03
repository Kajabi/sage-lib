import React from 'react';
import { ToolbarEditor } from './ToolbarEditor';

import { SageTokens } from '../configs';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';

const di = [
  { icon: SageTokens.ICONS.REMOVE, color: Button.COLORS.SECONDARY, label: "Remove"},
  { icon: SageTokens.ICONS.DANGER, color: Button.COLORS.SECONDARY, label: "Danger"},
  { icon: SageTokens.ICONS.EMAIL_ACTIVITY, color: Button.COLORS.SECONDARY, label: "Email"},
]

const BaseTemplate = (args) => (
  <div className="toolbar-editor" style={{ display: 'flex', width: '100%' }} id="toolbar">
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
        color={Button.COLORS.SECONDARY}
      >
        Remove
      </Button>
      <Dropdown
        icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
        isLabelVisible={false}
        label="More options"
        panelSize={Dropdown.PANEL_SIZES.SMALL}
        triggerClassnames="sage-btn--rich-text"
      >
        <ul className="sage-dropdown__menu">
          {di.map((item) => (
            <li className="sage-dropdown__item">
              <Button
                icon={item.icon}
                color={item.color}
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </Dropdown>

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
        color={Button.COLORS.SECONDARY}
      >
        Underline
      </Button>
      <Button
        icon={SageTokens.ICONS.STRIKETHROUGH}
        color={Button.COLORS.SECONDARY}
      >
        Strikethrough
      </Button>
      <Button
        icon={SageTokens.ICONS.UNDO}
        color={Button.COLORS.SECONDARY}
      >
        Undo
      </Button>
      <Button
        icon={SageTokens.ICONS.REDO}
        color={Button.COLORS.SECONDARY}
      >
        Redo
      </Button>
    </ToolbarEditor>
    <ToolbarEditor>
      <Button
        icon={SageTokens.ICONS.ARROW_CORNER}
        color={Button.COLORS.SECONDARY}
      >
        Bold
      </Button>
    </ToolbarEditor>
    <ToolbarEditor>
      <Button
        icon={SageTokens.ICONS.DANGER}
        color={Button.COLORS.SECONDARY}
      >
        Danger
      </Button>
      <Button
        icon={SageTokens.ICONS.REMOVE}
        color={Button.COLORS.SECONDARY}
      >
        Remove
      </Button>
      <Button
        icon={SageTokens.ICONS.BOLD}
        color={Button.COLORS.SECONDARY}
      >
        Bold
      </Button>
      <Button
        icon={SageTokens.ICONS.ITALIC}
        color={Button.COLORS.SECONDARY}
      >
        Italic
      </Button>
      <Button
        icon={SageTokens.ICONS.UNDERLINE}
        color={Button.COLORS.SECONDARY}
      >
        Underline
      </Button>
      <Button
        icon={SageTokens.ICONS.STRIKETHROUGH}
        color={Button.COLORS.SECONDARY}
        selected={true}
      >
        Strikethrough
      </Button>
      <Button
        icon={SageTokens.ICONS.UNDO}
        color={Button.COLORS.SECONDARY}
      >
        Undo
      </Button>
      <Button
        icon={SageTokens.ICONS.REDO}
        color={Button.COLORS.SECONDARY}
      >
        Redo
      </Button>
    </ToolbarEditor>
  </div>
);

export const Default = BaseTemplate.bind({});
