require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { PageHeading } from './PageHeading';

describe('Sage PageHeading', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      children: 'Test heading',
    };

    component = shallow(
      <PageHeading {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
