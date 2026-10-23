require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Choice } from './Choice';

describe('Sage Choice', () => {
  it('hides the icon from assistive tech when the choice has text', () => {
    const { container } = render(
      <Choice type={Choice.TYPES.ICON} icon={SageTokens.ICONS.PEN} text="Edit" />
    );

    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('leaves the icon exposed when it is the only content', () => {
    const { container } = render(<Choice type={Choice.TYPES.ICON} icon={SageTokens.ICONS.PEN} />);

    expect(container.querySelector('pds-icon')).not.toHaveAttribute('aria-hidden');
  });
});
