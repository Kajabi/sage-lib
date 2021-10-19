import React from 'react';
import uuid from 'react-uuid';
import {
  mockProfile,
  mockProfileActions,
  mockProfileMoreActions,
} from './data/contact-profile';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Description } from '../Description';
import { OptionsDropdown } from '../Dropdown';
import { Grid } from '../Grid';
import { Label } from '../Label';
import { Panel } from '../Panel';
import { SageClassnames, SageTokens } from '../configs';

export default {
  title: 'Mocks/Contact Profile',
  argTypes: {},
  args: {}
};
const Template = () => (
  <Grid container={Grid.CONTAINER_SIZES.SM}>
    {/* TODO: Need a drawer or modal to house this content rather than Panel */}
    <Panel>
      {/* --- Header --- */}
      <Panel.Row>
        <Button
          color={Button.COLORS.SECONDARY}
          href="#TODO-open-full-profile"
          icon={SageTokens.ICONS.BAN} // TODO: Need expand icon
          iconPosition={Button.ICON_POSITIONS.LEFT}
          subtle={true}
          small={true}
        >
          Open full profile
        </Button>
        <Button
          color={Button.COLORS.SECONDARY}
          href="#TODO-close-preview"
          icon={SageTokens.ICONS.REMOVE}
          iconOnly={true}
          subtle={true}
        >
          Close preview
        </Button>
      </Panel.Row>
      {/* /-- Header --- */}

      {/* --- Profile --- */}
      <Panel.Block className={SageClassnames.TYPE_ALIGN_CENTER}>
        <Avatar
          centered={true}
          image={{
            src: mockProfile.avatar_image,
            alt: mockProfile.name,
          }}
          initials={mockProfile.initials}
          size="68px"
          className={SageClassnames.SPACERS.SM_BOTTOM}
          // TODO: Add `badge` property
        />
        <h3 className={`${SageClassnames.TYPE.HEADING_4} ${SageClassnames.TYPE_COLORS.CHARCOAL_500}`}>
          {mockProfile.name}
        </h3>
        <Button
          color={Button.COLORS.SECONDARY}
          data-js-copy-button={mockProfile.email}
          icon={SageTokens.ICONS.COPY}
          iconPosition={Button.ICON_POSITIONS.RIGHT}
          subtle={true}
        >
          {mockProfile.email}
        </Button>
      </Panel.Block>
      <Button.Group
        gap={Button.Group.GAP_OPTIONS.SM}
        align={Button.Group.ALIGN_OPTIONS.CENTER}
      >
        {mockProfileActions.map(({ href, icon, label }) => (
          <Button
            color={Button.COLORS.SECONDARY}
            data-js-tooltip={label}
            href={href}
            icon={icon}
            iconOnly={true}
            key={uuid()}
            raised={false}
          >
            {label}
          </Button>
        ))}
        <OptionsDropdown data-js-tooltip="More" options={mockProfileMoreActions} />
      </Button.Group>
      {/* /-- Profile --- */}

      {/* --- Data --- */}
      <Panel.Stack>
        {mockProfile.user_stats.map((dataGroup) => (
          <React.Fragment key={uuid()}>
            <Description
              allcapsTitles={false}
              inlineSpread={true}
              items={dataGroup}
            />
            <Panel.Divider />
          </React.Fragment>
        ))}
        <Label.Group>
          {mockProfile.tags.map((tag) => (
            <Label color={Label.COLORS.DRAFT} key={uuid()} value={tag} />
          ))}
          <Button
            color={Button.COLORS.PRIMARY}
            href="#view-more"
            subtle={true}
          >
            View all
          </Button>
        </Label.Group>
      </Panel.Stack>
      {/* /-- Data --- */}
    </Panel>
  </Grid>
);

export const Default = Template.bind({});
