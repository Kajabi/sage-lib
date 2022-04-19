require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { MediaTile } from './MediaTile';

describe('Sage MediaTile', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <MediaTile {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
