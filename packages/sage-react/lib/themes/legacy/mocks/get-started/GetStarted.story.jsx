import React from 'react';
import {
  DashboardPanel,
  SidebarModule,
} from './components';

export default {
  title: 'Mocks/Get Started',
  argTypes: {},
  args: {}
};

const Template = () => <DashboardPanel />;

export const DashboardModule = Template.bind({});
export const Sidebar = () => (
  <SidebarModule
    step={0}
    cta={{
      label: 'Create a product',
      href: '#TODO-dev-product-url',
    }}
  />
);
