import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Dropdown } from './Dropdown';
import { ToolbarEditorDropdown } from './ToolbarEditorDropdown';
import { ToolbarDropdown } from './ToolbarDropdown';
import { defaultOptionsItems, sampleMenuItems } from './stories/story-helper';
import { CustomItemsStoryTemplate } from './stories/CustomItemsStory';
import { CustomPanelStoryTemplate } from './stories/CustomPanelStory';
import { BulkActionsStoryTemplate } from './stories/BulkActionsStory';
import { MultiMenuStoryTemplate } from './stories/MultiMenuStory';
import { SelectDropdownDemoTemplate } from './stories/SelectDropdownDemo';

export default {
  title: 'Sage/Dropdown',
  component: Dropdown,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Sage dropdown.'
      },
    },
  },
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{ Story() }</div>],
  subcomponents: {
    'Dropdown.ItemList': Dropdown.ItemList
  },
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      align: Dropdown.POSITIONS,
      panelSize: Dropdown.PANEL_SIZES
    }),
  },
  args: {
    align: Dropdown.POSITIONS.DEFAULT,
    className: null,
    closePanelOnExit: true,
    contained: false,
    customized: false,
    disabled: false,
    icon: null,
    isLabelVisible: true,
    isPinned: false,
    label: 'Switch label',
    panelMaxWidth: null,
    panelSize: Dropdown.PANEL_SIZES.DEFAULT,
    triggerButtonSubtle: false,
    children: (
      <Dropdown.ItemList items={sampleMenuItems} />
    ),
    exitPanelHandler: (data) => {
      if (data.handler) {
        data.handler();
      }
    }
  }
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: SageTokens.ICONS.GEAR,
  disabled: false,
  isLabelVisible: true,
  label: 'Feature',
};
Default.decorators = [
  (Story) => (
    <div style={{ minHeight: 450 }}>
      { Story() }
    </div>
  )
];

export const MenuWithArrow = Template.bind({});
MenuWithArrow.args = {
  icon: SageTokens.ICONS.GEAR,
  disabled: false,
  disclosure: true,
  isLabelVisible: true,
  label: 'Feature',
};
MenuWithArrow.decorators = [
  (Story) => (
    <div style={{ minHeight: 450 }}>
      { Story() }
    </div>
  )
];

export const RichTextEditor = (args) => (
  <ToolbarDropdown
    options={defaultOptionsItems}
    isPinned={args.isPinned}
    triggerClassnames="sage-btn--rich-text"
    triggerButtonSubtle={false}
  />
);
RichTextEditor.args = {
  isPinned: false
};
RichTextEditor.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 300 }}>
        { Story() }
      </div>
    </>
  )
];

export const RichTextEditorIconOnly = (args) => (
  <ToolbarEditorDropdown
    triggerClassnames="sage-btn--rich-text"
    triggerButtonSubtle={false}
    options={defaultOptionsItems}
    isPinned={args.isPinned}
  />
);
RichTextEditorIconOnly.args = {
  isPinned: false
};
RichTextEditorIconOnly.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 300 }}>
        { Story() }
      </div>
    </>
  )
];

export const DropdownMenuWithHeadings = BulkActionsStoryTemplate.bind({});
DropdownMenuWithHeadings.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 450 }}>
        { Story() }
      </div>
    </>
  )
];

export const Select = SelectDropdownDemoTemplate.bind({});
Select.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 400 }}>
        { Story() }
      </div>
    </>
  )
];

export const Multiselect = MultiMenuStoryTemplate.bind({});
Multiselect.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 400 }}>
        { Story() }
      </div>
    </>
  )
];

export const MenuWithCustomPanel = CustomPanelStoryTemplate.bind({});
MenuWithCustomPanel.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 400 }}>
        { Story() }
      </div>
    </>
  )
];

export const MenuWithCustomOptions = CustomItemsStoryTemplate.bind({});
MenuWithCustomOptions.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 400 }}>
        { Story() }
      </div>
    </>
  )
];
