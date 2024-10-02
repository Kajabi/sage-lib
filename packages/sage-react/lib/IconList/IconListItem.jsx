import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { Checkbox, Radio } from '../Toggle';
import { ICON_LIST_ITEM_INPUT_TYPES } from './configs';
import { IconListItemLabel } from './IconListItemLabel';
import { IconListItemSubtext } from './IconListItemSubtext';
import { IconListItemTitle } from './IconListItemTitle';

export const IconListItem = ({
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
    'sage-icon-list-item',
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
      <div className={`sage-icon-list-item__bullet ${input ? `sage-icon-list-item__bullet--${input}` : ''}`}>
        {bulletContents}
      </div>
      <div className="sage-icon-list-item__body">
        {children}
      </div>
    </li>
  );
};

IconListItem.Label = IconListItemLabel;
IconListItem.Subtext = IconListItemSubtext;
IconListItem.Title = IconListItemTitle;
IconListItem.INPUT_TYPES = ICON_LIST_ITEM_INPUT_TYPES;

IconListItem.defaultProps = {
  checked: false,
  children: null,
  className: null,
  icon: null,
  iconColor: Icon.COLORS.GREY_600,
  input: null,
  inputId: null,
  inputName: null,
  inputValue: null,
  label: null,
  onChangeInput: (val) => val,
};

IconListItem.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)),
  iconColor: PropTypes.oneOf(Object.values(Icon.COLORS)),
  input: PropTypes.oneOf(Object.values(ICON_LIST_ITEM_INPUT_TYPES)),
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  label: PropTypes.string,
  onChangeInput: PropTypes.func,
};
