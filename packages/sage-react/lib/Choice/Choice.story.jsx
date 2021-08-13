import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Avatar } from '../Avatar';
import { Choice } from './Choice';

// Default Sandbox
export default {
  title: 'Sage/Choice',
  component: Choice,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS,
      type: Choice.TYPES,
      verticalAlignIcon: Choice.ICON_ALIGNMENTS,
    }),
  },
  args: {
    icon: SageTokens.ICONS.VIDEO_ON,
    subtext: 'Description of Option 1',
    text: 'Option 1',
    verticalAlignIcon: Choice.ICON_ALIGNMENTS.DEFAULT,
  }
};

const Template = (args) => (
  <div style={{ maxWidth: '100%', display: 'flex' }}>
    <Choice {...args} />
  </div>
);
export const Default = Template.bind({});

// Wired Click Example
export const WiredClick = () => {
  const [isActive, setIsActive] = React.useState(false);

  const onClick = () => {
    setIsActive(true);
  };

  return (
    <div style={{ maxWidth: '100%', display: 'flex' }}>
      <Choice
        isActive={isActive}
        onClick={onClick}
        subtext="Description of Option 1"
        text="Option 1"
        verticalAlignIcon={Choice.ICON_ALIGNMENTS.DEFAULT}
      />
    </div>
  );
};

// Wired Radio Example
export const WiredRadio = () => {
  const [isActive, setIsActive] = React.useState(false);

  const onChangeRadio = () => {
    setIsActive(true);
  };

  return (
    <div style={{ maxWidth: '100%', display: 'flex' }}>
      <Choice
        isActive={isActive}
        radioConfigs={{
          id: 'bravo',
          name: 'alpha',
          value: 'charlie',
          onChange: onChangeRadio
        }}
        subtext="Description of Option 1"
        text="Option 1"
        type="radio"
        verticalAlignIcon={Choice.ICON_ALIGNMENTS.DEFAULT}
      />
    </div>
  );
};

// Wired Icon Example
export const WiredIcon = () => {
  const [isActive, setIsActive] = React.useState(false);

  const onClick = () => {
    setIsActive(true);
  };

  return (
    <div style={{ maxWidth: '100%', display: 'flex' }}>
      <Choice
        icon={SageTokens.ICONS.VIDEO_ON}
        isActive={isActive}
        onClick={onClick}
        subtext="Description of Option 1"
        text="Option 1"
        type="icon"
        verticalAlignIcon={Choice.ICON_ALIGNMENTS.DEFAULT}
      />
    </div>
  );
};

// Graphic Example
export const Graphic = () => (
  <div style={{ maxWidth: '100%', display: 'flex' }}>
    <Choice
      graphic="https://sage-design-system.kajabi.com/assets/card-placeholder-sm-34e033e836fc6c012f09e041dca054f44b68c9dbd69dbdb62c271f980f0b6bc9.png"
      href="https://example.com"
      subtext="Description of Option 1"
      text="Option 1"
      type="graphic"
    />
  </div>
);

// Arrow Example
export const Arrow = () => (
  <div style={{ maxWidth: '100%', display: 'flex' }}>
    <Choice
      href="https://example.com"
      subtext="Description of Option 1"
      text="Option 1"
      type="arrow"
    />
  </div>
);

// Link Text Example
export const LinkText = () => (
  <div style={{ maxWidth: '100%', display: 'flex' }}>
    <Choice
      graphic="https://sage-design-system.kajabi.com/assets/card-placeholder-sm-34e033e836fc6c012f09e041dca054f44b68c9dbd69dbdb62c271f980f0b6bc9.png"
      href="https://example.com"
      linkText="Sign In"
      text="Option 1"
      type="graphic"
    />
  </div>
);

// Custom Content Example
export const CustomContent = () => (
  <div style={{ maxWidth: '360px', display: 'flex' }}>
    <Choice
      href="https://example.com"
    >
      <Avatar initials="BH" />
      <div className="sage-card__block">
        <h4>Custom heading</h4>
        <p>Custom content here...</p>
      </div>
    </Choice>
  </div>
);

CustomContent.decorators = [
  (Choice) => (
    <>
      <div>
        <style>
          {`.sage-choice__content--custom {
            text-align: center;
            justify-items: center;
          }`}
        </style>
        <Choice />
      </div>
    </>
  )
];
