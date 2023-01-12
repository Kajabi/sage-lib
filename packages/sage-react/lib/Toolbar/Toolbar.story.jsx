import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { sampleSelectItems } from '../Dropdown/stories/story-helper';
import {
  Dropdown,
  SelectDropdown
} from '../Dropdown';
import { Search } from '../Search';
import { Checkbox } from '../Toggle';
import { Toolbar } from './Toolbar';
import { ToolbarEditor } from './ToolbarEditor';

export default {
  title: 'Sage/Toolbar',
  component: Toolbar,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Toolbars apply special formatting to supported elements for use as list controls and other similar places.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      gap: Toolbar.GAP_OPTIONS,
    }),
  },
  args: {
    children: (
      <>
        <Search
          placeholder="Find"
          value=""
          contained={true}
        />
        <Button
          color={Button.COLORS.SECONDARY}
          icon={SageTokens.ICONS.PEN}
          iconOnly={true}
        >
          Edit
        </Button>
        <Checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="On"
          label="A checkbox"
        />
        <SelectDropdown
          items={sampleSelectItems}
        />
        <p>Plain text</p>
      </>
    )
  }
};

const Template = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});

export const ToolbarGroupWithSearch = Template.bind({});
ToolbarGroupWithSearch.args = {
  children: (
    <Toolbar.Group>
      <Search
        placeholder="Find"
        value=""
        contained={true}
      />
      <SelectDropdown items={sampleSelectItems} />
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.PEN}
        iconOnly={true}
      >
        Edit
      </Button>
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.TRASH}
        iconOnly={true}
      >
        Remove
      </Button>
    </Toolbar.Group>
  )
};

export const ToolbarGroupWithButtons = Template.bind({});
ToolbarGroupWithButtons.args = {
  children: (
    <Toolbar.Group>
      <Button color={Button.COLORS.SECONDARY}>
        Button One
      </Button>
      <Button color={Button.COLORS.SECONDARY}>
        Button Two
      </Button>
      <Button color={Button.COLORS.SECONDARY}>
        Button Three
      </Button>
    </Toolbar.Group>
  )
};

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
];

const ToolbarEditorTemplate = () => (
  <div className="toolbar-editor" style={{ display: 'flex', width: '100%' }} id="toolbar">
    <ToolbarEditor isFixed={true}>
      <Dropdown
        icon={SageTokens.ICONS.ALIGN_LEFT}
        disclosure={true}
        label="Formats"
        panelSize={Dropdown.PANEL_SIZES.SMALL}
        triggerClassnames="sage-btn--rich-text rich-text__format-button"
      />
    </ToolbarEditor>
    <ToolbarEditor isFixed={true}>
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
    </ToolbarEditor>
    <ToolbarEditor isFixed={true}>
      <Dropdown
        icon={SageTokens.ICONS.COLOR}
        isLabelVisible={false}
        disclosure={true}
        label="Color"
        panelSize={Dropdown.PANEL_SIZES.SMALL}
        triggerClassnames="sage-btn--rich-text"
      />
    </ToolbarEditor>
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

export const ToolbarEditorStory = ToolbarEditorTemplate.bind({});
