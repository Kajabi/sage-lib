import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { TAB_STYLES, CHOICE_TYPES } from './configs';
import './TabsItem.scss';

const TabsItem = ({
  alignCenter,
  className,
  disabled,
  label,
  icon,
  isActive,
  itemStyle,
  onClick,
  panelId,
  subtext,
  type,
  ...rest
}) => {
  const itemStyleProtected = itemStyle === TAB_STYLES.PROGRESSBAR ? TAB_STYLES.TAB : itemStyle;
  const isChoice = itemStyle === TAB_STYLES.CHOICE;
  const isIconType = type && type === CHOICE_TYPES.ICON;
  const baseClass = `sage-${itemStyleProtected}`;
  const classNames = classnames(
    className,
    {
      [baseClass]: itemStyleProtected,
      [`${baseClass}--active`]: isActive,
      [`${baseClass}--align-center`]: isIconType && alignCenter,
      [`${baseClass}--${type}`]: type && !isIconType,
      [`${baseClass}--icon-${icon}`]: isIconType && icon,
    }
  );

  return (
    <button
      aria-controls={panelId}
      aria-selected={isActive}
      className={classNames}
      onClick={() => onClick(panelId)}
      role="tab"
      type="button"
      disabled={disabled}
      {...rest}
    >
      {isChoice ? (
        <span className="sage-choice__content">
          <em className="sage-choice__text">
            {label}
          </em>
          {subtext && (
            <span className="sage-choice__subtext">
              {subtext}
            </span>
          )}
        </span>
      ) : label}
    </button>
  );
};

TabsItem.CHOICE_TYPES = CHOICE_TYPES;

TabsItem.defaultProps = {
  alignCenter: false,
  className: null,
  disabled: false,
  icon: null,
  isActive: false,
  itemStyle: 'tab',
  onClick: id => id,
  subtext: null,
  type: null,
};

TabsItem.propTypes = {
  alignCenter: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isActive: PropTypes.bool,
  itemStyle: PropTypes.oneOf(Object.values(TAB_STYLES)),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  panelId: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  type: PropTypes.oneOf(Object.values(CHOICE_TYPES)),
};

export default TabsItem;
