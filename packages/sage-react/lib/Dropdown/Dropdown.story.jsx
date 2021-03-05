import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { FormSection } from '../FormSection';
import { Input } from '../Input';
import { SageTokens } from '../configs';
import { Dropdown } from './Dropdown';
import { OptionsDropdown } from './OptionsDropdown';
import { defaultOptionsItems, sampleMenuItems } from './stories/story-helper';
import { MultiMenuStory } from './stories/MultiMenuStory';
import { SelectDropdownDemo } from './stories/SelectDropdownDemo';
import { BulkActionsStory } from './stories/BulkActionsStory';

export default {
  title: 'Sage/Dropdown',
  component: Dropdown,
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Story /></div>],
  subcomponents: {
    'Dropdown.ItemList': Dropdown.ItemList
  },
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      panelSize: Dropdown.PANEL_SIZES
    }),
  },
  args: {
    align: null,
    className: false,
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
    triggerButtonSubtle: false
  }
};

export const Default = (args) => (
  <Dropdown
    align={args.align}
    closePanelOnExit={args.closePanelOnExit}
    contained={args.contained}
    customized={args.customized}
    disabled={args.disabled}
    icon={args.icon}
    isLabelVisible={args.isLabelVisible}
    isPinned={args.isPinned}
    label={args.label}
    panelSize={args.panelSize}
    panelMaxWidth={args.panelMaxWidth}
    triggerButtonSubtle={args.triggerButtonSubtle}
    triggerModifier={args.triggerModifier}
    exitPanelHandler={(data) => {
      if (data.handler) {
        data.handler();
      }
    }}
  >
    <Dropdown.ItemList items={sampleMenuItems} />
  </Dropdown>
);
Default.args = {
  icon: SageTokens.ICONS.GEAR,
  disabled: false,
  isLabelVisible: true,
  label: 'Feature',
};
Default.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 450 }}>
        <Story />
      </div>
    </>
  )
];

export const OptionMenu = (args) => (
  <OptionsDropdown options={defaultOptionsItems} isPinned={args.isPinned} />
);
OptionMenu.args = {
  isPinned: false
};
OptionMenu.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 300 }}>
        <Story />
      </div>
    </>
  )
];

export const DropdownMenuWithHeadings = () => (
  <BulkActionsStory />
);
DropdownMenuWithHeadings.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 450 }}>
        <Story />
      </div>
    </>
  )
];

export const Select = () => (
  <SelectDropdownDemo />
);
Select.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 400 }}>
        <Story />
      </div>
    </>
  )
];

export const Multiselect = () => (
  <MultiMenuStory />
);
Multiselect.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 400 }}>
        <Story />
      </div>
    </>
  )
];

export const MenuWithCustomPanel = (args) => (
  <Dropdown
    align={args.align}
    label={args.label}
    icon={args.icon}
    isLabelVisible={args.isLabelVisible}
  >
    <FormSection
      style={{
        width: '500px',
        padding: '24px'
      }}
      title="Sign in"
      subtitle="You must sign in order to use this feature."
    >
      <Input type="text" label="Username" />
      <Input type="password" label="Password" />
      <Button color={Button.COLORS.PRIMARY} alignEnd={true}>
        Log in
      </Button>
    </FormSection>
  </Dropdown>
);
MenuWithCustomPanel.args = {
  align: 'right',
  icon: SageTokens.ICONS.USERS,
  isLabelVisible: true,
  label: 'Login',
};
MenuWithCustomPanel.decorators = [
  (Story) => (
    <>
      <div style={{ minHeight: 400 }}>
        <Story />
      </div>
    </>
  )
];
