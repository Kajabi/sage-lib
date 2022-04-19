require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { TableRow } from './TableRow';
import { Checkbox } from '../Toggle';

describe('Rendering the Sage Icon Component', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      id: 'test-id',
    };

    component = shallow(
      <TableRow {...defaultProps} />
    );
  });

  it('renders the component', () => {
    expect(component).toHaveLength(1);
  });

  describe('toggling selectable prop', () => {
    it('selectable is true', () => {
      component.setProps({ selectable: true });
      expect(component.find('.sage-table__row--selectable')).toHaveLength(1);
    });

    it('selectable is false', () => {
      component.setProps({ selectable: false });
      expect(component.find('.sage-table__row--selectable')).toHaveLength(0);
    });
  });

  describe('when Checkbox is present', () => {
    let checkbox;

    beforeEach(() => {
      component.setProps({ selectable: true });
      checkbox = component.find(Checkbox);
    });

    it('renders Checkbox', () => {
      expect(checkbox).toHaveLength(1);
    });
  });

  describe('when Checkbox is not present', () => {
    let checkbox;

    beforeEach(() => {
      component.setProps({ selectable: false });
      checkbox = component.find(Checkbox);
    });

    it('renders Checkbox', () => {
      expect(checkbox).toHaveLength(0);
    });
  });
});
