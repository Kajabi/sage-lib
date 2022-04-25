require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { List } from './List';

describe('Sage List', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <List {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
