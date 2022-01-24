import React from 'react';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { sampleSelectItems } from '../Dropdown/stories/story-helper';
import { SelectDropdown } from '../Dropdown';
import { Search } from '../Search';
import { Checkbox } from '../Toggle';
import { Toolbar } from './Toolbar';

export default {
  title: 'Sage/Toolbar',
  component: Toolbar,
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
          raised={false}
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
        <Toolbar.Group>
          <Search
            placeholder="Find"
            value=""
            contained={true}
          />
          <SelectDropdown items={sampleSelectItems} />
          <Button
            color={Button.COLORS.SECONDARY}
            raised={false}
            icon={SageTokens.ICONS.PEN}
            iconOnly={true}
          >
            Edit
          </Button>
          <Button
            color={Button.COLORS.SECONDARY}
            raised={false}
            icon={SageTokens.ICONS.TRASH}
            iconOnly={true}
          >
            Remove
          </Button>
        </Toolbar.Group>
      </>
    )
  }
};
const Template = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
