import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Checkbox } from '../Toggle';
import { Link } from '../Link';
import { Tooltip } from '../Tooltip';
import { SageTokens } from '../configs';
import { OptionsDropdown } from './OptionsDropdown';
import { DROPDOWN_ITEM_COLORS } from './configs';

export const DropdownItem = ({
  borderAfter,
  borderBefore,
  color,
  customComponent,
  disabled,
  hasCheckbox,
  href,
  icon,
  id,
  isActive,
  isHeading,
  isLabelVisible,
  itemTag,
  label,
  groupId,
  onClick,
  onExit,
  options,
  payload,
  to,
  tooltip,
  ...rest
}) => {
  const classNames = classnames(
    'sage-dropdown__item',
    {
      'sage-dropdown__item--active': isActive,
      'sage-dropdown__item--disabled': disabled,
      'sage-dropdown__item--heading': isHeading,
      'sage-dropdown__item--with-options': options,
      'sage-dropdown__item--border-before': borderBefore,
      'sage-dropdown__item--border-after': borderAfter,
    }
  );

  const controlClassNames = classnames(
    'sage-dropdown__item-control',
    {
      [`sage-dropdown__item-control--icon-${icon}`]: icon,
      [`sage-dropdown__item-control--${color}`]: color,
    }
  );

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    let modifiedPayload;
    if (payload) {
      modifiedPayload = {
        icon,
        id,
        label,
        ...payload,
      };
    } else {
      modifiedPayload = {
        id,
      };
    }

    if (onExit) {
      onExit(modifiedPayload);
    }
  };

  const onExitSubmenu = (data) => {
    onExit({
      ...data,
      parentPayload: payload,
    });
  };

  const fieldId = `${groupId}-checkbox-${id}`;

  const renderOptions = () => (
    <OptionsDropdown
      className="sage-dropdown__item-options"
      id={`${groupId}-${id}-options`}
      exitPanelHandler={onExitSubmenu}
      options={options}
    />
  );

  const renderItem = () => {
    if (isHeading) {
      return <>{label}</>;
    }

    const CustomComponent = customComponent;

    if (hasCheckbox) {
      return (
        <label className={controlClassNames} htmlFor={fieldId}>
          <Checkbox
            checked={!!isActive}
            className="sage-dropdown__item-checkbox"
            disabled={disabled}
            id={fieldId}
            label={label}
            name={fieldId}
            onChange={handleClick}
            role="menuitem"
            standalone={true}
            value={label}
            {...rest}
          />
          <span className="sage-dropdown__item-label" title={label}>
            {label}
          </span>
        </label>
      );
    }

    if (href || to) {
      return (
        <Link
          className={controlClassNames}
          href={href}
          to={to}
          role="menuitem"
          onClick={handleClick}
          disabled={disabled}
          tag={itemTag}
          suppressDefaultClass={true}
          {...rest}
        >
          {(!customComponent && isLabelVisible) && (
            <span className="sage-dropdown__item-label" title={label}>
              {label}
            </span>
          )}
          {customComponent && <CustomComponent {...payload} />}
        </Link>
      );
    }

    return (
      <button
        className={controlClassNames}
        type="button"
        onClick={handleClick}
        role="menuitem"
        disabled={disabled}
        {...rest}
      >
        {(!customComponent && isLabelVisible) && (
          <span className="sage-dropdown__item-label" title={label}>
            {label}
          </span>
        )}
        {customComponent && <CustomComponent {...payload} />}
      </button>
    );
  };

  return (
    <>
      {tooltip ? (
        <Tooltip {...tooltip}>
          <li className={classNames} role="none">
            {renderItem()}
            {options && (
              renderOptions()
            )}
          </li>
        </Tooltip>
      ) : (
        <li className={classNames} role="none">
          {renderItem()}
          {options && (
            renderOptions()
          )}
        </li>
      )}
    </>
  );
};

DropdownItem.COLORS = DROPDOWN_ITEM_COLORS;

DropdownItem.defaultProps = {
  borderAfter: false,
  borderBefore: false,
  color: null,
  customComponent: null,
  disabled: false,
  groupId: 'dropdown',
  hasCheckbox: false,
  href: null,
  icon: null,
  isActive: false,
  isHeading: false,
  isLabelVisible: true,
  itemTag: null,
  onClick: null,
  onExit: null,
  options: null,
  payload: null,
  to: null,
  tooltip: null,
};

DropdownItem.propTypes = {
  borderAfter: PropTypes.bool,
  borderBefore: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(DROPDOWN_ITEM_COLORS)),
  customComponent: PropTypes.elementType,
  disabled: PropTypes.bool,
  groupId: PropTypes.string,
  hasCheckbox: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isActive: PropTypes.bool,
  isHeading: PropTypes.bool,
  isLabelVisible: PropTypes.bool,
  itemTag: Link.tagPropTypes,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  onExit: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  })),
  payload: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  to: PropTypes.string,
  tooltip: PropTypes.shape({
    position: PropTypes.oneOf(Object.values(Tooltip.POSITIONS)),
  }),
};
