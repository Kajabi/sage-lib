require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from './Icon';

describe('Rendering the Sage Icon Component', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      icon: Icon.ICONS.MICROPHONE
    };

    component = shallow(
      <Icon {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });

    it('has an icon class', () => {
      expect(component.get(0).props).toHaveProperty('className');
      expect(component.get(0).props.className).toContain(`sage-icon-${defaultProps.icon}`);
    });

    it('no label results in aria-hidden', () => {
      expect(component.get(0).props).toHaveProperty('aria-hidden', true);
    });
  });
  
  describe('variations', () => {
    it('label results in aria-label', () => {
      const label = 'New label';
      component.setProps({ label });
      expect(component.get(0).props).toHaveProperty('aria-label', label);
    });
  });
});
