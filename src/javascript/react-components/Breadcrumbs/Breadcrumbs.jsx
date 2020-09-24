import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Breadcrumbs = ({ icon, items }) => {
  const renderedItems = items.map(({ url, label, onClick }, i) => {
    const isCurrent = items.length > 1 && i + 1 === items.length;

    const content = (
      <a
        href={url || '#'}
        className={`sage-breadcrumbs__link ${isCurrent && 'sage-breadcrumbs__link--current'}`}
        aria-current={isCurrent ? 'page' : false}
        onClick={onClick}
      >
        {(icon && i === 0) && (
          <Icon className="sage-breadcrumbs__icon" icon={icon} />
        )}
        {label}
      </a>
    );

    return items.length === 1 ? (
      <p className="sage-breadcrumbs__item">{content}</p>
    ) : (
      <li className="sage-breadcrumbs__item">{content}</li>
    );
  });

  return (
    <nav aria-label="Breadcrumbs" className="sage-breadcrumbs sage-page-heading__back">
      {items.length > 1 ? (
        <ul>
          {renderedItems}
        </ul>
      ) : (
        <>
          {renderedItems}
        </>
      )}
    </nav>
  );
};

Breadcrumbs.defaultProps = {
  icon: Icon.ICONS.CARET_LEFT,
  items: [],
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf({
    label: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func,
  }),
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)),
};

export default Breadcrumbs;
