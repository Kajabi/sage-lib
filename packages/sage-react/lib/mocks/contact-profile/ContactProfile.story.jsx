import React from 'react';
import { mockProfile } from './dataHelper.jsx';
import { Grid } from '../../Grid';
import { Panel } from '../../Panel';
import { Header, Profile, Data } from './components';

export default {
  title: 'Mocks/Contact Profile',
  argTypes: {},
  args: {}
};
const Template = () => (
  <Grid container={Grid.CONTAINER_SIZES.SM}>
    {/* TODO: Need a drawer or modal to house this content rather than Panel */}
    <Panel>
      <Header />
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
    </Panel>
  </Grid>
);

export const Default = Template.bind({});
