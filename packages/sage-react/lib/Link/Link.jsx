import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../configs';
import { Tooltip } from '../Tooltip';
import { LINK_COLORS, LINK_ICON_POSITIONS } from './configs';

const tagPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.elementType,
]);

export const Link = ({
  className,
  children,
  icon,
  iconPosition,
  removeUnderline,
  small,
  style,
  suppressDefaultClass,
  tag,
  tooltip,
  truncate,
  ...rest
}) => {
  const linkClasses = {
    'sage-link': true,
    [`sage-link--${style}`]: style,
    'sage-link--small': small,
    'sage-link--remove-underline': removeUnderline,
    [`sage-link--icon-${iconPosition}-${icon}`]: icon && iconPosition,
  };
  const classNames = classnames(
    className,
    !suppressDefaultClass && linkClasses
  );

  const SelfTag = tag || 'a';

  return (
    <>
      {tooltip ? (
        <Tooltip {...tooltip}>
          <SelfTag
            className={classNames}
            {...rest}
          >
            {truncate ? (
              <span className="t-sage--truncate">
                {children}
              </span>
            ) : children}
          </SelfTag>
        </Tooltip>
      ) : (
        <SelfTag
          className={classNames}
          {...rest}
        >
          {truncate ? (
            <span className="t-sage--truncate">
              {children}
            </span>
          ) : children}
        </SelfTag>
      )}
    </>
  );
};

Link.CLASSNAMES = { ...SageClassnames.LINK };
Link.COLORS = LINK_COLORS;
Link.ICON_POSITIONS = LINK_ICON_POSITIONS;

Link.defaultProps = {
  className: null,
  children: null,
  icon: null,
  iconPosition: null,
  removeUnderline: false,
  small: false,
  style: Link.COLORS.PRIMARY,
  suppressDefaultClass: false,
  tag: null,
  tooltip: null,
  truncate: false,
};

Link.tagPropTypes = tagPropTypes;

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  iconPosition: PropTypes.oneOf(Object.values(Link.ICON_POSITIONS)),
  removeUnderline: PropTypes.bool,
  small: PropTypes.bool,
  style: PropTypes.oneOf(Object.values(Link.COLORS)),
  suppressDefaultClass: PropTypes.bool,
  tag: tagPropTypes,
  tooltip: PropTypes.shape({
    position: PropTypes.oneOf(Object.values(Tooltip.POSITIONS)),
    size: PropTypes.oneOf(Object.values(Tooltip.SIZES)),
    theme: PropTypes.oneOf(Object.values(Tooltip.THEMES)),
  }),
  truncate: PropTypes.bool,
};
