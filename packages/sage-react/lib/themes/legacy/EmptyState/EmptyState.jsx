import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { EMPTY_STATE_SCOPES } from './configs';

export const EmptyState = ({
  actions,
  centerVertical,
  children,
  compact,
  graphic,
  icon,
  scope,
  text,
  title,
  titleTag,
  ...rest
}) => {
  const className = classnames(
    'sage-empty-state',
    {
      'sage-empty-state--center': centerVertical,
      'sage-empty-state--compact': compact && scope !== EMPTY_STATE_SCOPES.COMPACT,
      [`sage-empty-state--${scope}`]: scope,
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
      {icon && (<Icon icon={icon} size={Icon.SIZES.XXXL} className="sage-empty-state__icon" />)}
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
            {actions}
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

EmptyState.SCOPES = EMPTY_STATE_SCOPES;

EmptyState.defaultProps = {
  actions: null,
  centerVertical: false,
  children: null,
  compact: false,
  graphic: null,
  icon: null,
  scope: EmptyState.SCOPES.DEFAULT,
  text: null,
  title: null,
  titleTag: 'h2',
};

EmptyState.propTypes = {
  actions: PropTypes.node,
  centerVertical: PropTypes.bool,
  children: PropTypes.node,
  compact: PropTypes.bool,
  graphic: PropTypes.node,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  scope: PropTypes.oneOf(Object.values(EmptyState.SCOPES)),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
