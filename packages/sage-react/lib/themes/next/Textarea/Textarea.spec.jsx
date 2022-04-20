require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Textarea } from './Textarea';

describe('Sage Textarea', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      id: 'textarea-1',
    };

    component = shallow(
      <Textarea {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
