require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Chart } from './Chart';

describe('Sage Chart', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Chart {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
