require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { EmptyState } from './EmptyState';

describe('Sage EmptyState', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <EmptyState {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
