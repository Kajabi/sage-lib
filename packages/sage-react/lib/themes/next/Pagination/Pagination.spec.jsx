require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from './Pagination';

describe('Sage Pagination', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      currentPage: 1,
    };

    component = shallow(
      <Pagination {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
