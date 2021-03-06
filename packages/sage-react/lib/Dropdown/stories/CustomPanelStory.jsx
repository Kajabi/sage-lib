/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { SageTokens } from '../../configs';
import { Dropdown } from '..';
import { Button } from '../../Button';
import { Card } from '../../Card';
import { Input } from '../../Input';

const CustomPanelBody = ({ onExit, children }) => (
  <Card.Stack style={{ padding: '24px' }}>
    {children}
  </Card.Stack>
);

CustomPanelBody.defaultProps = {
  children: null,
  onExit: () => {},
};

CustomPanelBody.propTypes = {
  children: PropTypes.node,
  onExit: PropTypes.func,
};

export const CustomPanelStory = () => {
  const [dropdownToken, setDropdownToken] = useState(uuid());

  const onClickSubmit = () => {
    setDropdownToken(uuid());
  };

  return (
    <Dropdown
      align="right"
      icon={SageTokens.ICONS.USERS}
      isLabelVisible={true}
      label="Login"
      panelStateToken={dropdownToken}
    >
      <CustomPanelBody>
        <Input id={uuid()} type="text" label="Username" />
        <Input id={uuid()} type="password" label="Password" />
        <Button onClick={onClickSubmit} color={Button.COLORS.PRIMARY} alignEnd={true}>
          Log in
        </Button>
      </CustomPanelBody>
    </Dropdown>
  );
};
