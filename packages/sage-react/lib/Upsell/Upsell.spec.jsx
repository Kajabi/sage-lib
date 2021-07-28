require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Upsell } from './Upsell';

describe('Sage Upsell', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Upsell {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
