require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Label } from './Label';

describe('Sage Label', () => {
  it('hides the icon from assistive tech', () => {
    const { container } = render(<Label value="Draft" icon={SageTokens.ICONS.DRAFT} />);

    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('hides the dropdown caret from assistive tech', () => {
    const { container } = render(
      <Label value="Draft" interactiveType={Label.INTERACTIVE_TYPES.DROPDOWN} />
    );

    expect(container.querySelector('pds-icon[name="down-small"]')).toHaveAttribute('aria-hidden', 'true');
  });
});
