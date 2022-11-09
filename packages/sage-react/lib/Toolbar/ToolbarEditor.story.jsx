import React from 'react';
import { ToolbarEditor } from './ToolbarEditor';

import { SageTokens } from '../configs';
import { Button } from '../Button';

export default {
  title: 'Sage/ToolbarEditor',
  component: ToolbarEditor,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Toolbar Editor is used for places like toolbar'
      },
    },
  },
  argTypes: {},
  args: {}
};

const BaseTemplate = (args) => (
  <div style={{ display: 'flex', width: '100%' }} id="toolbar">
    <ToolbarEditor {...args}>
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
    </ToolbarEditor>
    <ToolbarEditor>
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
    </ToolbarEditor>
  </div>

);

export const Default = BaseTemplate.bind({});
const PoCTemplate = () => (
  <div className="toolbar-editor">
    <div className="toolbar-editor__container">
      <div className="toolbar-editor__sections-container">
        <ToolbarEditor name="section-1">
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
        </ToolbarEditor>
        <ToolbarEditor name="section-2">
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
        </ToolbarEditor>
      </div>
    </div>
  </div>
);
export const ProofOfConcenpt = PoCTemplate.bind({});
