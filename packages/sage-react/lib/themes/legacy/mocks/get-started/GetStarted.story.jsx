import React from 'react';
import {
  SageBreakpointProvider,
  SageTokens,
} from '../..';
import {
  DashboardPanel,
  SidebarModule,
} from './components';

export default {
  title: 'Mocks/Get Started',
  argTypes: {},
  args: {}
};

const Template = () => (
  <SageBreakpointProvider  queries={SageTokens.BREAKPOINT_QUERIES}>
    <DashboardPanel />
  </SageBreakpointProvider>
);

export const DashboardModule = Template.bind({});
export const Sidebar = () => (
  <SidebarModule
    step={1}
    cta={{
      label: 'Create a product',
      href: '#TODO-dev-product-url',
    }}
  />
);
