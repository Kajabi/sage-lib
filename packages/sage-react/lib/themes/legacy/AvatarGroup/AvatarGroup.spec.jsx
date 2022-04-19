require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { AvatarGroup } from './AvatarGroup';

describe('Sage AvatarGroup', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      items: [],
    };

    component = shallow(
      <AvatarGroup {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
