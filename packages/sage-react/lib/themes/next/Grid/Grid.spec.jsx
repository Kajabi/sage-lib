require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from './Grid';

describe('Sage Grid', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Grid {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
