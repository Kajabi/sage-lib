import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LAYOUT_TYPES } from './configs';
import { Button } from '../Button';
import { Link } from '../Link';
import { SageTokens } from '../configs';

export const Description = ({
  actionWidth,
  children,
  className,
  data,
  id,
  layout,
  link,
  items,
  primaryAction,
  title,
  titleWidth,
  ...rest
}) => {
  const classNames = classnames(
    'sage-description',
    className,
    {
      [`sage-description--${layout}`]: layout
    }
  );

  const renderItem = ({ title, data, link, primaryAction }) => (
    <>
      {title && (
        <dt className="sage-description__title">
          {title}
        </dt>
      )}
      {(data && link) && (
        <Link {...link}>
          <dd className="sage-description__data">
            {data}
          </dd>
        </Link>
      )}
      {(data && !link) && (
        <dd className="sage-description__data">
          {data}
        </dd>
      )}
      {primaryAction && (
        <div className="sage-description__action-button">
          <Button
            value={primaryAction.value}
            color={Button.COLORS.PRIMARY}
            subtle={true}
            icon={SageTokens.ICONS.CARET_RIGHT}
            iconPosition={Button.ICON_POSITIONS.RIGHT}
            iconOnly={primaryAction.iconOnly}
            {...primaryAction.attributes}
          >
            {primaryAction.value}
          </Button>
        </div>
      )}
    </>
  );

  const renderItems = () => {
    if (items && items.length > 0) {
      return items.map((item) => (
        <div key={item.id || uuid()} className="sage-description__term-group">
          {renderItem(item)}
        </div>
      ));
    }

    return renderItem({ title, data, link, primaryAction });
  };

  const setCustomProps = () => {
    const props = {};

    if (actionWidth) {
      props['--sage-description-action-width'] = actionWidth || 'auto';
    }

    if (titleWidth) {
      props['--sage-description-title-width'] = titleWidth || 'auto';
    }

    return props;
  };

  return (
    <div
      className={classNames}
      id={id}
      style={setCustomProps()}
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
  data: null,
  id: null,
  items: [],
  layout: null,
  link: null,
  primaryAction: {},
  title: null,
  titleWidth: null,
};

Description.propTypes = {
  actionWidth: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  data: PropTypes.node,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.node,
    id: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
  })),
  layout: PropTypes.oneOf(Object.values(LAYOUT_TYPES)),
  link: PropTypes.shape({
    href: PropTypes.string,
  }),
  primaryAction: PropTypes.shape({
    attributes: PropTypes.objectOf(PropTypes.object),
    iconOnly: PropTypes.bool,
    value: PropTypes.string,
  }),
  title: PropTypes.string,
  titleWidth: PropTypes.string,
};
