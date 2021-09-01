require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { MediaTiles } from './MediaTiles';

describe('Sage MediaTiles', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <MediaTiles {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
