require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { DataCard } from './DataCard';

describe('Sage DataCard', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <DataCard {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
