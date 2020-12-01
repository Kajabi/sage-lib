import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import Icon from '../Icon';
import Link from '../Link';
import { breadcrumbItemPropTypes } from './configs';
import './Breadcrumbs.scss';

const Breadcrumbs = ({
  className,
  icon,
  isProgressbar,
  items,
  ...rest
}) => {
  const classNames = classnames(
    'sage-breadcrumbs',
    className,
    {
      'sage-breadcrumbs--progressbar': isProgressbar
    }
  );
  let currentSet = false;
  const renderedItems = items.map(({
    current,
    disabled,
    label,
    linkTag,
    ...otherProps
  }, i) => {
    const isCurrent = current || (!currentSet && items.length > 1 && i + 1 === items.length);
    currentSet = currentSet || isCurrent;

    const content = (
      <Link
        aria-current={isCurrent ? 'page' : false}
        aria-disabled={disabled}
        className={`sage-breadcrumbs__link ${isCurrent && 'sage-breadcrumbs__link--current'}`}
        tag={linkTag}
        {...otherProps}
      >
        {(icon && i === 0) && (
          <Icon className="sage-breadcrumbs__icon" icon={icon} />
        )}
        {label}
      </Link>
    );

    return items.length === 1 ? (
      <p key={i.toString()} className="sage-breadcrumbs__item">{content}</p>
    ) : (
      <li key={i.toString()} className="sage-breadcrumbs__item">{content}</li>
    );
  });

  return (
    <nav
      aria-label="Breadcrumbs"
      className={classNames}
      {...rest}
    >
      {items.length > 1 ? (
        <ul className="sage-breadcrumbs__list">
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

Breadcrumbs.itemPropTypes = breadcrumbItemPropTypes;

Breadcrumbs.defaultProps = {
  className: null,
  icon: SageTokens.ICONS.CARET_LEFT,
  isProgressbar: false,
  items: [],
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isProgressbar: PropTypes.bool,
  items: PropTypes.arrayOf(breadcrumbItemPropTypes),
};

export default Breadcrumbs;
