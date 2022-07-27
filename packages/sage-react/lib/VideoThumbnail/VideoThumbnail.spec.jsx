require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { VideoThumbnail } from './VideoThumbnail';

describe('Sage Video Thumbnail', () => {
  it('renders the Video Thumbnail when imagesrc is present', () => {
    const defaultProps = {
      imagesrc: 'http://source.unsplash.com/random/600X600'
    };

    render(<VideoThumbnail {...defaultProps} />);
    const wrapper = document.querySelector('.sage-video-thumbnail');
    expect(wrapper).not.toBeNull();
  });
});
