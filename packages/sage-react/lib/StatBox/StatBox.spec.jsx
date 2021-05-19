require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { StatBox } from './StatBox';

describe('Sage StatBox', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      data: 65535,
      link: { href: '#', value: 'View More' },
      title: 'In Progress',
    };

    component = shallow(
      <StatBox {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
