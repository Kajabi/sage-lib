require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Link } from './Link';

describe('Sage Link', () => {
  it('hides the icon from assistive tech when the link has text', () => {
    const { container } = render(<Link href="/settings" icon={SageTokens.ICONS.PEN}>Edit</Link>);

    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('leaves the icon exposed when it is the only content', () => {
    const { container } = render(<Link href="/settings" icon={SageTokens.ICONS.PEN} />);

    expect(container.querySelector('pds-icon')).not.toHaveAttribute('aria-hidden');
  });
});
