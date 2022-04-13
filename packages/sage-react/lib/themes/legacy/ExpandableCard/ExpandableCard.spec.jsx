require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { ExpandableCard } from './ExpandableCard';

describe('Sage ExpandableCard', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <ExpandableCard {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
