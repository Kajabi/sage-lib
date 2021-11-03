import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageClassnames, SageTokens } from '../configs';
import { Icon } from './Icon';

export default {
  title: 'Sage/Icon',
  component: Icon,
  argTypes: {
    ...selectArgs({
      adjacentType: Icon.ADJACENT_TYPES,
      cardColor: Icon.CARD_COLORS,
      color: Icon.COLORS,
      icon: SageTokens.ICONS,
      size: Icon.SIZES
    }),
  },
  args: {
    cardColor: null,
    circular: false,
    color: Icon.COLORS.CHARCOAL,
    icon: Icon.ICONS.CHECK_CIRCLE,
    label: 'Click me',
    size: Icon.SIZES.MD
  }
};
const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
export const AdjacentType = Template.bind({});
AdjacentType.decorators = [
  (Story) => (
    <>
      <div style={{ display: 'flex' }}>
        <Story />
        <p className={`${SageClassnames.TYPE.HEADING_2} ${SageClassnames.SPACERS.XS_LEFT}`}>
          I am a Heading 2 type spec
        </p>
      </div>
      <p>
        Watch how the icon becomes more aligned when you set
        the <code>adjacentType</code> property to match
        the type spec to which it is adjacent.
      </p>
    </>
  )
];
