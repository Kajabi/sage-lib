import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Dropdown } from './Dropdown';
import { ToolbarDropdown } from './ToolbarDropdown';
import { ToolbarEditorDropdown } from './ToolbarEditorDropdown';
import { defaultOptionsItems, sampleMenuItems } from './stories/story-helper';

export default {
  title: 'Sage/Dropdown/ToolbarDropdown',
  component: ToolbarDropdown,
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
    'Dropdown.ItemList': Dropdown.ItemList,
    Dropdown
  },
  argTypes: {
    ...selectArgs({
      align: Dropdown.POSITIONS,
      panelSize: Dropdown.PANEL_SIZES
    }),
  },
  args: {
    align: Dropdown.POSITIONS.DEFAULT,
    className: null,
    isPinned: false,
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

const Template = (args) => <ToolbarDropdown options={defaultOptionsItems} {...args} />;

export const Default = Template.bind({});
Default.args = {
  isPinned: false
};

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
