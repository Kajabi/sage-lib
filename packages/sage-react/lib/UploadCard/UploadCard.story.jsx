import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import Grid from '../Grid';
import UploadCard from './UploadCard';

storiesOf('Sage/Upload Card', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <UploadCard
        acceptedFiles={object('Files array', [{ name: 'contacts.csv', size: '14', }])}
        selectionLabel="Select a file"
        selectionSubtext="Upload a .csv up to 10KB"
        replaceLabel="Replace file"
      />
    </Grid>
  ));
