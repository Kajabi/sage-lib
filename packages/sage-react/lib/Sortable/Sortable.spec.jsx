require('../test/testHelper');

import React from 'react';
import { shallow } from 'enzyme';
import { Sortable } from './Sortable';

describe('Sage Sortable', () => {
  let component,
    defaultProps;

  beforeEach(() => {
    defaultProps = {
      list: [],
      setList: data => null,
      onEnd: data => data,
      renderItem: (item) => (
        <p>{item}</p>
      ),
    };

    component = shallow(
      <Sortable {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
