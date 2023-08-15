import React from 'react';
import { Button } from '../Button';
import { Grid, SageTokens } from '..';
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
  ],
  previewImage: {
    alt: 'cat',
    src: 'https://placekitten.com/360'
  }
};

export const CustomActions = Template.bind({});
CustomActions.args = {
  actions: (
    <Button
      color={Button.COLORS.SECONDARY}
      icon={SageTokens.ICONS.CARET_DOWN}
      iconPosition={Button.ICON_POSITIONS.RIGHT}
    >
      Select a file
    </Button>
  ),
  customFileInputField: true,
};

export const Stacked = Template.bind({});
Stacked.args = {
  stacked: true,
};
