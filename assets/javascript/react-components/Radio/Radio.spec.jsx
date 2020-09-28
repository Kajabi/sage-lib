require('test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';

describe('Rendering the Sage Radio Component', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      title: 'Radio',
      isChecked: false,
      isDisabled: false,
      onUpdate: jest.fn()
    };

    component = shallow(
      <Radio {...defaultProps} />
    );
  });

  it('renders the component', () => {
    expect(component).toHaveLength(1);
  });

  it('has a title', () => {
    const label = component.find('label').get(0);
    expect(label.props).toHaveProperty('children', defaultProps.title);
  });

  it('does not render checked', () => {
    const input = component.find('input').get(0);
    expect(input.props).toHaveProperty('checked', false);
  });

  it('does render checked', () => {
    component.setProps({ isChecked: true });
    const input = component.find('input').get(0);
    expect(input.props).toHaveProperty('checked', true);
  });

  it('when radio is disabled', () => {
    component.setProps({ isDisabled: true });
    const input = component.find('input').get(0);
    expect(input.props).toHaveProperty('disabled', true);
  });

  it('when radio is not disabled', () => {
    const input = component.find('input').get(0);
    expect(input.props).toHaveProperty('disabled', false);
  });

  it('calls the update', () => {
    component.find('input').at(0).simulate('change',
      { target: { isChecked: true } });
    expect(defaultProps.onUpdate).toHaveBeenCalled();
  });
});
