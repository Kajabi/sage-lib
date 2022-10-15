import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Card } from '../Card';
import { Grid } from '../Grid';
import { Loader } from './Loader';

export default {
  title: 'Sage/Loader',
  component: Loader,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Stylized loading animations for use with components.'
      },
    },
  },
  argTypes: {
    ...selectArgs({
      type: Loader.TYPES
    }),
  },
  args: {
    fillSpace: true,
    loading: true,
    type: Loader.TYPES.BAR
  }
};
const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Grid container={Grid.CONTAINER_SIZES.MD}>
        <Card>
          {Story()}
        </Card>
      </Grid>
    </>
  )
];
