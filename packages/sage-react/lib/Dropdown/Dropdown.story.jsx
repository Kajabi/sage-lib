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
    panelModifier: Dropdown.PANEL_SIZES.DEFAULT,
    triggerButtonSubtle: false
  }
};

export const Default = (args) => (
  <Dropdown
    label={args.label}
    icon={args.icon}
    isDisabled={args.isDisabled}
    isLabelVisible={args.isLabelVisible}
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
  isDisabled: false,
  isLabelVisible: true,
  label: 'Feature',
};

export const OptionMenu = (args) => (
  <OptionsDropdown options={defaultOptionsItems} isPinned={args.isPinned} />
);
OptionMenu.args = {
  isPinned: false
};

export const DropdownMenuWithHeadings = () => (
  <BulkActionsStory />
);

export const Select = () => (
  <SelectDropdownDemo />
);

export const Multiselect = () => (
  <MultiMenuStory />
);

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
