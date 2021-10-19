import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from '../Link';

export const Description = ({
  allcapsTitles,
  children,
  className,
  data,
  id,
  inlineSpread,
  link,
  items,
  title,
  ...rest
}) => {
  const classNames = classnames(
    'sage-description',
    className,
    {
      'sage-description--inline-spread': inlineSpread,
      'sage-description--normalcase-titles': !allcapsTitles,
    }
  );

  const renderItem = ({ title, data, link }) => (
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

    return renderItem({ title, data, link });
  };

  return (
    <div className={classNames} id={id} {...rest}>
      {renderItems()}
      {children}
    </div>
  );
};

Description.defaultProps = {
  allcapsTitles: false,
  children: null,
  className: null,
  data: null,
  id: null,
  inlineSpread: false,
  link: null,
  items: [],
  title: null,
};

Description.propTypes = {
  allcapsTitles: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  data: PropTypes.node,
  id: PropTypes.string,
  inlineSpread: PropTypes.bool,
  link: PropTypes.shape({
    href: PropTypes.string,
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.node,
    id: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
  })),
  title: PropTypes.string,
};
