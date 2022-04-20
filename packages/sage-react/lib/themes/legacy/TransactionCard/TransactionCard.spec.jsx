require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { TransactionCard } from './TransactionCard';

describe('Sage TransactionCard', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <TransactionCard {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
