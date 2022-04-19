import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LAYOUT_TYPES } from './configs';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const Description = ({
  actionWidth,
  children,
  className,
  noDividers,
  layout,
  items,
  titleWidth,
  ...rest
}) => {
  const classNames = classnames(
    'sage-description',
    className,
    {
      'sage-description--no-dividers': noDividers,
      [`sage-description--${layout}`]: layout,
    }
  );

  const renderItem = ({ title, data, action }) => {
    let iconOnly = true;

    if (action && action.value) {
      iconOnly = false;
    }

    if (action && action.iconOnly !== undefined) {
      iconOnly = action.iconOnly;
    }

    return (
      <>
        {title && (
          <dt className="sage-description__title">
            {title}
          </dt>
        )}
        {data && (
          <dd className="sage-description__data">
            {data}

            {action && (
              <div className="sage-description__action">
                <Button
                  color={Button.COLORS.PRIMARY}
                  subtle={true}
                  icon={SageTokens.ICONS.CARET_RIGHT}
                  iconPosition={!iconOnly && Button.ICON_POSITIONS.RIGHT}
                  iconOnly={iconOnly}
                  {...action.attributes}
                >
                  {action.value || 'View more'}
                </Button>
              </div>
            )}
          </dd>
        )}
      </>
    );
  };

  const renderItems = () => {
    if (!items || items.length === 0) {
      return null;
    }

    let hasActions = false;
    items.forEach((item) => {
      if (item.action) {
        hasActions = true;
      }
    });

    return items.map((item) => {
      if (!item) {
        return null;
      }

      const termGroupClassnames = classnames(
        'sage-description__term-group',
        {
          'sage-description__term-group--no-action': !hasActions,
          'sage-description__term-group--hide-title': item.hideTitle,
        }
      );

      return (
        <div
          key={item.id || uuid()}
          id={item.id}
          className={termGroupClassnames}
        >
          {renderItem(item)}
        </div>
      );
    });
  };

  const getCustomProps = () => {
    const props = {};

    if (actionWidth) {
      props['--sage-description-action-width'] = actionWidth;
    }

    if (titleWidth) {
      props['--sage-description-title-width'] = titleWidth;
    }

    return props;
  };

  return (
    <div
      className={classNames}
      style={getCustomProps()}
      {...rest}
    >
      {renderItems()}
      {children}
    </div>
  );
};

Description.LAYOUT = LAYOUT_TYPES;

Description.defaultProps = {
  actionWidth: null,
  children: null,
  className: null,
  items: [],
  layout: null,
  noDividers: false,
  titleWidth: null,
};

Description.propTypes = {
  actionWidth: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    action: PropTypes.shape({
      attributes: PropTypes.objectOf(PropTypes.object),
      iconOnly: PropTypes.bool,
      value: PropTypes.string,
    }),
    data: PropTypes.node,
    id: PropTypes.string,
    title: PropTypes.string,
  })),
  layout: PropTypes.oneOf(Object.values(LAYOUT_TYPES)),
  noDividers: PropTypes.bool,
  titleWidth: PropTypes.string,
};
