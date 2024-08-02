import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { EMPTY_STATE_SIZES } from './configs';

export const EmptyState = ({
  actions,
  centerVertical,
  children,
  graphic,
  icon,
  backgroundColor,
  size,
  text,
  title,
  titleTag,
  video,
  ...rest
}) => {
  const className = classnames(
    'sage-empty-state',
    {
      'sage-empty-state--center': centerVertical,
      [`sage-empty-state--${size}`]: size,
    },
  );

  const TitleTag = titleTag || 'h2';

  return (
    <section
      className={className}
      {...rest}
    >
      {graphic && (
        <div className="sage-empty-state__graphic">
          {graphic}
        </div>
      )}
      {icon && (
        <div
          className="sage-empty-state__icon-container"
          style={{ '--color-background-icon': backgroundColor || SageTokens.COLOR_PALETTE.MERCURY_30 }}
        >
          <Icon
            color={Icon.COLORS.WHITE}
            icon={icon}
            size={size === EmptyState.SIZES.COMPACT ? Icon.SIZES.XL : Icon.SIZES.XXXL}
            className="sage-empty-state__icon"
          />
        </div>
      )}
      <div className="sage-empty-state__content">
        {title && (
          <TitleTag className="sage-empty-state__title">
            {title}
          </TitleTag>
        )}
        {text && (
          (typeof text === 'string') ? (
            <p className="sage-empty-state__text">
              {text}
            </p>
          ) : (
            <div className="sage-empty-state__text">
              {text}
            </div>
          )
        )}
        {actions && (
          <div className="sage-empty-state__actions">
            <Button.Group
              align={Button.Group.ALIGN_OPTIONS.CENTER}
              gap={Button.Group.GAP_OPTIONS.SM}
            >
              {actions}
            </Button.Group>
          </div>
        )}
        {video && (
          <div className="sage-empty-state__video">
            {video}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

EmptyState.SIZES = EMPTY_STATE_SIZES;

EmptyState.defaultProps = {
  actions: null,
  centerVertical: false,
  children: null,
  graphic: null,
  icon: null,
  backgroundColor: null,
  size: EmptyState.SIZES.DEFAULT,
  text: null,
  title: null,
  titleTag: 'h2',
  video: null,
};

EmptyState.propTypes = {
  /**
   * Slot into which buttons or other actions can be placed.
   */
  actions: PropTypes.node,
  /**
   * If true, the Empty State will be visually centered inside the entire page context.
   */
  centerVertical: PropTypes.bool,
  /**
   * The content to be rendered within the Empty State.
   */
  children: PropTypes.node,
  /**
   * Adds a graphic above the content.
   */
  graphic: PropTypes.node,
  /**
   * Adds an icon above the content.
   */
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  /**
   * Sets the background color of the icon container. Defaults to Mercury 30
   */
  backgroundColor: PropTypes.string,
  /**
   * The size and context of the Empty State.
   */
  size: PropTypes.oneOf(Object.values(EmptyState.SIZES)),
  /**
   * Sets the text for the Empty State.
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Sets the title for the Empty State.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Sets which HTML heading tag to use on the title.
   */
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Slot into which video cards or other media can be placed.
   */
  video: PropTypes.node,
};
