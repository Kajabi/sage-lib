import React from 'react';
import { Grid } from '..';
import { UploadCard } from './UploadCard';

export default {
  title: 'Sage/UploadCard',
  component: UploadCard,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'The Upload Card provides a visually pleasing lockup for a file upload field along with other helpful controls.'
      },
    },
  },
  args: {
    selectionLabel: 'Select a file',
    selectionSubtext: 'Upload a .csv up to 10KB',
    replaceLabel: 'Replace file'
  },
};
const Template = (args) => <UploadCard {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Grid container={Grid.CONTAINER_SIZES.MD}>
        {Story()}
      </Grid>
    </>
  )
];

export const DefaultWithError = Template.bind({});
DefaultWithError.args = {
  errors: [
    {
      message: 'This is the error message.'
    },
  ]
};

export const SelectedWithError = Template.bind({});
SelectedWithError.args = {
  acceptedFiles: [{ name: '.csv', size: '1 M' }],
  errors: [
    {
      message: 'This is the error message.'
    },
  ]
};
