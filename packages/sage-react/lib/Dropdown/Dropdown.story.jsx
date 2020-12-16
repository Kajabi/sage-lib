import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { SageTokens } from '../configs';
import Button from '../Button';
import FormSection from '../FormSection';
import Input from '../Input';
import Dropdown from './Dropdown';
import OptionsDropdown from './OptionsDropdown';
import { defaultOptionsItems, sampleMenuItems } from './stories/story-helper';
import MultiMenuStory from './stories/MultiMenuStory';
import SelectDropdownDemo from './stories/SelectDropdownDemo';
import BulkActionsStory from './stories/BulkActionsStory';

storiesOf('Sage/Dropdown', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Dropdown
      label={text('Label', 'Feature')}
      icon={select('Icon', SageTokens.ICONS, SageTokens.ICONS.GEAR)}
      isDisabled={boolean('Disabled?', false)}
      isLabelVisible={boolean('Is Label visible?', true)}
      exitPanelHandler={(data) => {
        if (data.handler) {
          data.handler();
        }
      }}
    >
      <Dropdown.ItemList items={sampleMenuItems} />
    </Dropdown>
  ))
  .add('Option menu', () => (
    <OptionsDropdown options={defaultOptionsItems} isPinned={false} />
  ))
  .add('Dropdown menu with headings', () => (
    <BulkActionsStory />
  ))
  .add('Select', () => <SelectDropdownDemo />)
  .add('Multiselect', () => <MultiMenuStory />)
  .add('Menu with custom panel', () => (
    <Dropdown
      align="right"
      label="Login"
      icon={SageTokens.ICONS.USERS}
      isLabelVisible={true}
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
  ));
