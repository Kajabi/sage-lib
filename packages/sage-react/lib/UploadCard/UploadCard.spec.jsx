require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { UploadCard } from './UploadCard';

describe('Sage UploadCard', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {};

    component = shallow(
      <UploadCard {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
