import React from 'react';
import { SageTokens } from '../configs';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { Tag } from './Tag';

export default {
  title: 'Sage/Tag',
  component: Tag,
  argTypes: {
    // As needed, use this for elaboration of token properties
    // such as shown below for icons
    ...selectArgs({
      // icon: SageTokens.ICONS,
    }),
  },
  args: {
    action: (
      <Button
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.REMOVE}
        iconOnly={true}
        subtle={true}
      >
        Remove
      </Button>
    ),
    value: 'Label'
  }
};
const Template = (args) => <Tag {...args} />;

// The default story; add more as needed by duplicating this line and adjusting as needed.
export const Default = Template.bind({});
