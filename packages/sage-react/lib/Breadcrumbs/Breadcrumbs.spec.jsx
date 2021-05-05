require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumbs } from './Breadcrumbs';

describe('Sage Breadcrumbs', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      items: [],
    };

    component = shallow(
      <Breadcrumbs {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
