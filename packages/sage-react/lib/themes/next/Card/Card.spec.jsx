require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Sage Card', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Card {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
