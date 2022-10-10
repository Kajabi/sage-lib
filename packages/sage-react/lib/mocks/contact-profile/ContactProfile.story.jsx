import React from 'react';
import { mockProfile } from './dataHelper';
import { Button } from '../../Button';
import { Grid } from '../../Grid';
import { Drawer } from '../../Drawer';
import { SageTokens } from '../../configs';
import { Profile, Data } from './components';

// export is commented out in order to remove mocks from sidebar
// export default {
//   title: 'Mocks/Contact Profile',
//   argTypes: {},
//   args: {}
// };

const Template = () => {
  const [drawerActive, setDrawerActive] = React.useState(false);

  return (
    <Grid container={Grid.CONTAINER_SIZES.SM}>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={() => setDrawerActive(true)}
      >
        View Profile
      </Button>
      <Drawer
        active={drawerActive}
        customHeader={(
          <Button
            color={Button.COLORS.SECONDARY}
            href="#TODO-open-full-profile"
            icon={SageTokens.ICONS.EXPAND}
            iconPosition={Button.ICON_POSITIONS.LEFT}
            subtle={true}
            small={true}
          >
            Open full profile
          </Button>
        )}
        id="contact-profile"
        onExit={() => setDrawerActive(false)}
      >
        <Profile
          avatarImage={mockProfile.avatar_image}
          email={mockProfile.email}
          initials={mockProfile.initials}
          name={mockProfile.name}
        />
        <Data
          stats={mockProfile.user_stats}
          tags={mockProfile.tags}
        />
      </Drawer>
    </Grid>
  );
};

export const Default = Template.bind({});
