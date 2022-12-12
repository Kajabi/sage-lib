import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Dropdown } from './Dropdown';
import { OptionsDropdown } from './OptionsDropdown';
import { defaultOptionsItems, sampleMenuItems } from './stories/story-helper';

export default {
  title: 'Sage/Dropdown/OptionsDropdown',
  component: OptionsDropdown,
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
    exitPanelHandler: (data) => {
      if (data.handler) {
        data.handler();
      }
    }
  }
};

const Template = (args) => (
  <OptionsDropdown options={defaultOptionsItems} {...args}>
    <Dropdown.ItemList items={sampleMenuItems} />
  </OptionsDropdown>
);

export const Default = Template.bind({});
Default.args = {
  isPinned: false
};
