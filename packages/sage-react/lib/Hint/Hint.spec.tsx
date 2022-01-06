require('../test/testHelper');

import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Hint, HintProps} from './Hint';

describe('Sage Hint', () => {
  let component: ShallowWrapper
  let defaultProps: HintProps;

  beforeEach(() => {
    defaultProps = {
      content: ""
    };

    component = shallow(
      <Hint {...defaultProps} />
    );
  });

  describe('construction', () => {
    it('renders the component', () => {
      expect(component).toHaveLength(1);
    });
  });
});
