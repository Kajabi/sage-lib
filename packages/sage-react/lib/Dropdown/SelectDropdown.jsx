/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { LegacySelectDropdown } from './LegacySelectDropdown';
import { ImprovedSelectDropdown } from './ImprovedSelectDropdown';
import { DROPDOWN_PANEL_SIZES, DROPDOWN_POSITIONS } from './configs';

export const SelectDropdown = ({
  useLegacy,
  ...rest
}) => (useLegacy ? (
  <LegacySelectDropdown {...rest} />
) : (
  <ImprovedSelectDropdown {...rest} />
));

SelectDropdown.PANEL_SIZES = DROPDOWN_PANEL_SIZES;
SelectDropdown.POSITIONS = DROPDOWN_POSITIONS;
SelectDropdown.setSelectedItem = ImprovedSelectDropdown.setSelectedItem;
SelectDropdown.setSelectedValueHook = ImprovedSelectDropdown.setSelectedValueHook;

SelectDropdown.defaultProps = {
  useLegacy: true,
};

SelectDropdown.propTypes = {
  useLegacy: PropTypes.bool,
};
