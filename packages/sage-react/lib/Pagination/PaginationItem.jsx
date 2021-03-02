import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const PaginationItem = ({ children, current, disabled, onClick, url, }) => {
  const classNames = classnames(
    'sage-pagination__page',
    {
      'sage-pagination__page--current': current,
      'sage-pagination__page--disabled': disabled,
    }
  );

  const handleClick = (evt) => {
    if (onClick) {
      evt.preventDefault();
      onClick();
    }
  }

  return (
    <li className="sage-pagination__item">
      <a
        aria-disabled={disabled}
        className={classNames}
        href={url || '#'}
        onClick={handleClick}
        role={!url && 'button'}
      >
        {children}
      </a>
    </li>
  );
};

PaginationItem.defaultProps = {
  children: null,
  disabled: false,
  onClick: null,
  url: null,
};

PaginationItem.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  url: PropTypes.string,
};
