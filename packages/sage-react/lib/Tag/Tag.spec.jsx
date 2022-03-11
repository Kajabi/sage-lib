require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from './Tag';

describe('Sage Tag', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      label: 'Label',
    };

    component = shallow(
      <Tag {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
