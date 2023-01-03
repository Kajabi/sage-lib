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

const textFormatItems = [
  {
    id: 1,
    icon: SageTokens.ICONS.UNDERLINE,
    color: Button.COLORS.SECONDARY,
    label: 'Underline',
  },
  {
    id: 2,
    icon: SageTokens.ICONS.MARGIN_LEFT,
    color: Button.COLORS.SECONDARY,
    label: 'Left indent',
  },
  {
    id: 3,
    icon: SageTokens.ICONS.MARGIN_RIGHT,
    color: Button.COLORS.SECONDARY,
    label: 'Right indent',
  },
  {
    id: 4,
    icon: SageTokens.ICONS.STRIKETHROUGH,
    color: Button.COLORS.SECONDARY,
    label: 'Strikethrough',
  },
  {
    id: 5,
    icon: SageTokens.ICONS.SUBSCRIPT,
    color: Button.COLORS.SECONDARY,
    label: 'Subscript',
  },
  {
    id: 6,
    icon: SageTokens.ICONS.SUPERSCRIPT,
    color: Button.COLORS.SECONDARY,
    label: 'Superscript',
  }
]

const BaseTemplate = (args) => (
  <div className="toolbar-editor" style={{ display: 'flex', width: '100%' }} id="toolbar">
    <div>
      <Dropdown
        icon={SageTokens.ICONS.ALIGN_LEFT}
        disclosure={true}
        label="Formats"
        panelSize={Dropdown.PANEL_SIZES.SMALL}
        triggerClassnames="sage-btn--rich-text rich-text__format-button"
      />
    </div>
    <div className="toolbar-editor__button-group">
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
        color={Button.COLORS.SECONDARY}
      >
        Italic
      </Button>
      <Dropdown
        icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
        isLabelVisible={false}
        label="More options"
        panelSize={Dropdown.PANEL_SIZES.SMALL}
        triggerClassnames="sage-btn--rich-text"
      >
        <ul className="sage-dropdown__menu">
          {textFormatItems.map((item) => (
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
    </div>
    <div>
      <Dropdown
        icon={SageTokens.ICONS.COLOR}
        isLabelVisible={false}
        disclosure={true}
        label="Color"
        panelSize={Dropdown.PANEL_SIZES.SMALL}
        triggerClassnames="sage-btn--rich-text"
      />
    </div>
    <ToolbarEditor>
      <Button
        icon={SageTokens.ICONS.LIST_BULLET}
        color={Button.COLORS.SECONDARY}
      >
        Bulleted List
      </Button>
      <Button
        icon={SageTokens.ICONS.LIST_NUMBERS}
        color={Button.COLORS.SECONDARY}
      >
        Numbered List
      </Button>
    </ToolbarEditor>
    <ToolbarEditor>
      <Button
        icon={SageTokens.ICONS.ALIGN_LEFT}
        color={Button.COLORS.SECONDARY}
      >
        Left align
      </Button>
      <Button
        icon={SageTokens.ICONS.ALIGN_RIGHT}
        color={Button.COLORS.SECONDARY}
      >
        Right align
      </Button>
      <Button
        icon={SageTokens.ICONS.ALIGN_CENTER}
        color={Button.COLORS.SECONDARY}
      >
        Center Align
      </Button>
      <Button
        icon={SageTokens.ICONS.ALIGN_JUSTIFY}
        color={Button.COLORS.SECONDARY}
      >
        Justify
      </Button>
    </ToolbarEditor>
    <ToolbarEditor>
      <Button
        icon={SageTokens.ICONS.IMAGE}
        color={Button.COLORS.SECONDARY}
      >
        Files & images
      </Button>
      <Button
        icon={SageTokens.ICONS.URL}
        color={Button.COLORS.SECONDARY}
      >
        Link
      </Button>
      <Button
        icon={SageTokens.ICONS.CODE}
        color={Button.COLORS.SECONDARY}
      >
        Code
      </Button>
      <Button
        icon={SageTokens.ICONS.HORIZONTAL_LINE}
        color={Button.COLORS.SECONDARY}
      >
        Divider
      </Button>
      <Button
        icon={SageTokens.ICONS.QUOTE}
        color={Button.COLORS.SECONDARY}
      >
        Blockquote
      </Button>
    </ToolbarEditor>
  </div>
);

export const Default = BaseTemplate.bind({});
