require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { IconList } from './IconList';

describe('Sage IconList', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <IconList {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
