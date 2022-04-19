import React from 'react';
import { Grid } from '..';
import { UploadCard } from './UploadCard';

export default {
  title: 'Sage/UploadCard',
  component: UploadCard,
  args: {
    selectionLabel: 'Select a file',
    selectionSubtext: 'Upload a .csv up to 10KB',
    replaceLabel: 'Replace file'
  }
};
const Template = (args) => <UploadCard {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Grid container={Grid.CONTAINER_SIZES.MD}>
        <Story />
      </Grid>
    </>
  )
];
