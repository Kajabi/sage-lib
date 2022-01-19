import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { Checkbox, Radio } from '../Toggle';
import { CONTROL_LIST_ITEM_INPUT_TYPES } from './configs';
import { ControlListItemLabel } from './ControlListItemLabel';
import { ControlListItemSubtext } from './ControlListItemSubtext';
import { ControlListItemTitle } from './ControlListItemTitle';

export const ControlListItem = ({
  checked,
  children,
  className,
  icon,
  iconColor,
  input,
  inputId,
  inputName,
  inputValue,
  label,
  onChangeInput,
  ...rest
}) => {
  const classNames = classnames(
    'sage-control-list-item',
    className,
  );

  let bulletContents = null;
  if (input) {
    switch (input) {
      case 'radio':
        bulletContents = (
          <Radio
            id={inputId}
            name={inputName}
            standalone={true}
            value={inputValue}
            checked={checked}
            onChange={onChangeInput}
            label={label}
          />
        );
        break;
      case 'checkbox':
        bulletContents = (
          <Checkbox
            id={inputId}
            name={inputName}
            standalone={true}
            value={inputValue}
            checked={checked}
            onChange={onChangeInput}
            label={label}
          />
        );
        break;
      default:
        bulletContents = null;
        break;
    }
  } else if (icon) {
    bulletContents = (
      <Icon
        icon={icon}
        size={Icon.SIZES.LG}
        color={iconColor}
        label={label}
      />
    );
  }

  return (
    <li className={classNames} {...rest}>
      <div className={`sage-control-list-item__bullet ${input ? `sage-control-list-item__bullet--${input}` : ''}`}>
        {bulletContents}
      </div>
      <div className="sage-control-list-item__body">
        {children}
      </div>
    </li>
  );
};

ControlListItem.Label = ControlListItemLabel;
ControlListItem.Subtext = ControlListItemSubtext;
ControlListItem.Title = ControlListItemTitle;
ControlListItem.INPUT_TYPES = CONTROL_LIST_ITEM_INPUT_TYPES;

ControlListItem.defaultProps = {
  checked: false,
  children: null,
  className: null,
  icon: null,
  iconColor: Icon.COLORS.GREY_500,
  input: null,
  inputId: null,
  inputName: null,
  inputValue: null,
  label: null,
  onChangeInput: (val) => val,
};

ControlListItem.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)),
  iconColor: PropTypes.oneOf(Object.values(Icon.COLORS)),
  input: PropTypes.oneOf(Object.values(CONTROL_LIST_ITEM_INPUT_TYPES)),
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  label: PropTypes.string,
  onChangeInput: PropTypes.func,
};
