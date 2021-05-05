require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { SageTokens } from '../configs';
import { IconCard } from './IconCard';

describe('Sage IconCard', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      icon: SageTokens.ICONS.PEN,
    };

    component = shallow(
      <IconCard {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
