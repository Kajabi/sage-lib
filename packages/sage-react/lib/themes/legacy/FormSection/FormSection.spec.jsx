require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { FormSection } from './FormSection';

describe('Sage FormSection', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      title: 'Test title'
    };

    component = shallow(
      <FormSection {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
