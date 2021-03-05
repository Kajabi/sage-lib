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

export const MenuWithCustomPanel = Template.bind({});
MenuWithCustomPanel.args = {
  align: 'right',
  children: (
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
  ),
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
