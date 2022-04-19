require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Typeahead } from './Typeahead';

describe('Sage Typeahead', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <Typeahead {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
