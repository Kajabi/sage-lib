import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Panel } from '../Panel';
import { VideoThumbnail } from './VideoThumbnail';

export default {
  title: 'Sage/VideoThumbnail',
  component: VideoThumbnail,
  args: {
    imageUrl: 'http://source.unsplash.com/random/600X600'
  },
  argTypes: {
    ...selectArgs({
    })
  }
};

export const Default = (args) => (
  <Panel>
    <Panel.Figure>
      <VideoThumbnail {...args} />
    </Panel.Figure>
    <p>
      By default, Panel figures are rendered using the image
      native aspect ratio and scale accordingly.
    </p>
  </Panel>
);
