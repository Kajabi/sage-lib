import React from 'react';
import { ReactiveNavigation } from './ReactiveNavigation';

import { SageTokens } from '../configs';
import { Button } from '../Button';

export default {
  title: 'Sage/ReactiveNavigation',
  component: ReactiveNavigation,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Reactive Navigation is used for places like toolbar'
      },
    },
  },
  argTypes: {},
  args: {}
};

const BaseTemplate = (args) => (
  <div style={{ display: 'flex', width: '100%', height: '32px', background: 'lightGrey' }} id="toolbar">
    <ReactiveNavigation {...args}>
      <Button
        disclosure={true}
        icon={SageTokens.ICONS.ALIGN_LEFT}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        value="Text align"
      />
      <Button
        icon={SageTokens.ICONS.REMOVE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.BOLD}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.ITALIC}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.UNDERLINE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.STRIKETHROUGH}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.UNDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.REDO}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
    </ReactiveNavigation>
    <ReactiveNavigation>
      <Button
        disclosure={true}
        icon={SageTokens.ICONS.BOLD}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
        value="Text align"
      />
      <Button
        icon={SageTokens.ICONS.CHECK}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.CODE}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
      <Button
        icon={SageTokens.ICONS.ITALIC}
        iconOnly={true}
        color={Button.COLORS.SECONDARY}
      />
    </ReactiveNavigation>
  </div>

);

export const Default = BaseTemplate.bind({});
const PoCTemplate = () => (
  <div className="editor-toolbar">
    <div className="editor-toolbar-container">
      <div style={{ display: 'block', width: '100%', position: 'absolute' }} />
      <div className="editor-toolbar-sections-container">
        <ReactiveNavigation name="section-1">
          <Button
            icon={SageTokens.ICONS.ALIGN_LEFT}
            disclosure={true}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
            value="Text align"
          />
          <Button
            icon={SageTokens.ICONS.REMOVE}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.BOLD}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.ITALIC}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.UNDERLINE}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.STRIKETHROUGH}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.UNDO}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.REDO}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
        </ReactiveNavigation>
        <ReactiveNavigation name="section-2">
          <Button
            icon={SageTokens.ICONS.ALIGN_LEFT}
            disclosure={true}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
            value="Text align"
          />
          <Button
            icon={SageTokens.ICONS.REMOVE}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.BOLD}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.ITALIC}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.UNDERLINE}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.STRIKETHROUGH}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.UNDO}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
          <Button
            icon={SageTokens.ICONS.REDO}
            iconOnly={true}
            color={Button.COLORS.SECONDARY}
          />
        </ReactiveNavigation>
      </div>
    </div>
  </div>
);
export const ProofOfConcenpt = PoCTemplate.bind({});
