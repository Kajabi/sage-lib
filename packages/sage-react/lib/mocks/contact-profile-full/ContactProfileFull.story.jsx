import React from 'react';
import { Button } from '../..';
import { Root } from './components';

// TODO: These are only temporary styles that will not be needed once expanded drawer is available
// See https://kajabi.atlassian.net/browse/SAGE-361
import './styles.css';

export default {
  title: 'Mocks/Contact Profile - Full view',
  argTypes: {},
  args: {}
};
const Template = () => {
  const [modalActive, setModalActive] = React.useState(true);
  return (
    <>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={() => setModalActive(true)}
      >
        Open modal
      </Button>
      <Root
        modalActive={modalActive}
        onExitModal={() => setModalActive(false)}
      />
    </>
  );
};

export const Default = Template.bind({});
