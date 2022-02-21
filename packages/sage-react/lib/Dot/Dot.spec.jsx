require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Dot } from './Dot';

describe('Sage Dot', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Dot {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
