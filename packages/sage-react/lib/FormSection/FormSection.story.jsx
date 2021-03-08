import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { FormSection } from './FormSection';

export default {
  title: 'Sage/FormSection',
  component: FormSection,
  args: {
    children: (
      <>
        <Input id="fs-email" label="Email/username" />
        <Input id="fs-password" label="Password" type="password" />
        <Button color="primary">
          Log in
        </Button>
      </>
    ),
    subtitle: 'Log in to access our application and all its great features!',
    title: 'Sign in'
  }
};

const Template = (args) => <FormSection {...args} />;
export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
    <div style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}} >
      <Story />
    </div>
    </>
  )
]
