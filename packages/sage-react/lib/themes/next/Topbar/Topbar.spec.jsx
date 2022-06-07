require('../test/testHelper');

import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Breadcrumbs } from '../Breadcrumbs';
import { Icon } from '../Icon';
import { Topbar } from './Topbar';
import { SageTokens } from '../configs';

describe('Sage Topbar', () => {
  it('renders content on left side when property is present on desktop', () => {
    const props = {
      contentLeftDesktop: (
        <Breadcrumbs
          items={[
            {
              label: 'Page Title',
              href: 'http://example.com/1'
            },
            {
              label: 'Page Title',
              href: 'http://example.com/2'
            },
            {
              label: 'Page Title',
              href: 'http://example.com/3'
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
          icon={SageTokens.ICONS.MENU}
        >
          Menu
        </Button>
      ),
    };

    render(<Topbar {...props} />);

    expect(document.querySelector('.sage-btn')).not.toBeNull();
  });

  it('renders content on the right side when property is present', () => {
    const props = {
      contentRight: (
        <>
          <Icon
            icon={Icon.ICONS.SEARCH}
          />
          <Avatar
            size="48px"
          />
        </>
      ),
    };

    render(<Topbar {...props} />);

    expect(document.querySelector('.sage-avatar')).not.toBeNull();
    expect(document.querySelector('.sage-icon')).not.toBeNull();
  });
});
