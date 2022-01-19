require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { ControlList } from './ControlList';

describe('Sage ControlList', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <ControlList {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
