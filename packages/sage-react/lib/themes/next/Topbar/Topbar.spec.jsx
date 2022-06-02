require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Breadcrumbs } from '../Breadcrumbs';
import { Topbar } from './Topbar';

describe('Sage Topbar', () => {
  it('renders content on left side when property is present on desktop', () => {
    const props = {
      contentLeftDesktop: (
        <Breadcrumbs
          items={[
            {
              href: '#',
              label: 'Back'
            }
          ]}
        />
      ),
    };

    render(<Topbar {...props} />);

    expect(document.querySelector('.sage-breadcrumbs')).not.toBeNull();
  });

  it('renders content on left side when property is present on mobile', () => {
    const props = {
      contentLeftMobile: (
        <Button
          color={Button.COLORS.PRIMARY}
          iconOnly={true}
        >
          Test Button
        </Button>
      ),
    };

    render(<Topbar {...props} />);

    expect(document.querySelector('.sage-btn')).not.toBeNull();
  });

  it('renders content on the right side when property is present', () => {
    const props = {
      contentRight: (
        <Avatar
          size="48px"
        />
      ),
    };

    render(<Topbar {...props} />);

    expect(document.querySelector('.sage-avatar')).not.toBeNull();
  });
});
