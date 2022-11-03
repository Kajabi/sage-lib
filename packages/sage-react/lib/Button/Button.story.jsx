import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Avatar } from '../Avatar';
import { Button } from './Button';

export default {
  title: 'Sage/Button',
  component: Button,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Standard button styling with multiple display options.',
      },
    },
  },
  argTypes: {
    ...selectArgs({
      color: Button.COLORS,
      icon: SageTokens.ICONS,
      iconPosition: Button.ICON_POSITIONS,
    }),
  },
  args: {
    children: 'Test me',
    customContentClassName: null,
    color: Button.COLORS.PRIMARY,
    hasCustomContent: false,
    iconOnly: false,
    iconPosition: Button.ICON_POSITIONS.LEFT,
  }
};
const Template = (args) => <Button {...args} />;

export const Standard = Template.bind({});

export const Accent = Template.bind({});
Accent.args = {
  color: Button.COLORS.ACCENT,
};

export const Subtle = Template.bind({});
Subtle.args = {
  subtle: true
};

export const HasIcon = Template.bind({});
HasIcon.args = {
  icon: SageTokens.ICONS.GEAR,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  color: Button.COLORS.NEUTRAL,
  icon: SageTokens.ICONS.GEAR,
  iconOnly: true,
  subtle: true
};

export const Loading = (args) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Button
      {...args}
      loading={loading}
      onClick={handleClick}
      aria-label={loading ? 'My label loading...' : 'My label'}
    >
      Loading Button
    </Button>
  );
};

Loading.argTypes = {
  loading: {
    control: false
  }
};

export const Disclosure = Template.bind({});
Disclosure.args = {
  disclosure: true,
  color: Button.COLORS.SECONDARY
};

export const RichTextEditorWordsAndArrow = Template.bind({});
RichTextEditorWordsAndArrow.args = {
  children: 'Text',
  className: 'sage-btn--rich-text',
  disclosure: true,
  color: Button.COLORS.SECONDARY
};

export const RichTextEditorIconAndArrow = Template.bind({});
RichTextEditorIconAndArrow.args = {
  className: 'sage-btn--rich-text',
  disclosure: true,
  icon: SageTokens.ICONS.REMOVE,
  iconOnly: true,
  color: Button.COLORS.SECONDARY
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  fullWidth: true
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  hasCustomContent: true,
  color: Button.COLORS.SECONDARY,
  children: (
    <>
      <Avatar initials="CM" />
      Court McFadzean
    </>
  ),
  customContentClassName: 'demo-custom-class',
  subtle: true,
};
CustomContent.decorators = [
  (Story) => (
    <>
      <div>
        <style>
          {`.demo-custom-class {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 0;
          }`}
        </style>
        {Story()}
      </div>
    </>
  )
];
