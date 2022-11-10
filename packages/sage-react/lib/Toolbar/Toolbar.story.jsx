import React from 'react';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { sampleSelectItems } from '../Dropdown/stories/story-helper';
import { SelectDropdown } from '../Dropdown';
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
  argTypes: {},
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

const ToolbarEditorTemplate = (args) => (
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
);

export const ToolbarEditorStory = ToolbarEditorTemplate.bind({});
