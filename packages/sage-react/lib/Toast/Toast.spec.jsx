require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Toast } from './Toast';

import { TOAST_TYPES } from './configs';

describe('Sage Toast', () => {
  it('displays the Toast when isActive', () => {
    const props = {
      isactive: true
    };

    render(<Toast {...props} />);
    screen.findByText('sage-loader__spinner');
  });

  it('displays the spinner while loading', () => {
    const props = {
      loading: TOAST_TYPES.LOADING
    };

    render(<Toast {...props} />);
    screen.findByText('sage-toast');
  });
});
