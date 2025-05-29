import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import pluralize from 'pluralize';
import uuid from 'react-uuid';
import {
  PAGINATION_ARIA_LABEL,
  PAGINATION_DEFAULT_ITEMS_NOUN,
  PAGINATION_LABEL_NEXT,
  PAGINATION_LABEL_PREVIOUS,
} from './configs';
import { PaginationItem } from './PaginationItem';
import { PaginationItemGap } from './PaginationItemGap';

export const Pagination = ({
  align,
  className,
  currentPage,
  hideCounter,
  hidePageButtons,
  itemsNoun,
  itemsTotalCount,
  labels,
  maxPageButtons,
  onClickPage,
  pageCount,
  pageCountPrefix,
  pageCountSuffix,
  pageSize,
  pageURLFn,
  ...rest
}) => {
  // Get a safe page count:
  let localPageCount;
  switch (true) {
    // We favor `pageCount` if it is a positive value.
    case pageCount > 0:
      localPageCount = pageCount;
      break;

    // Or, if both `itemsTotalCount` and `pageSize` are positive values
    // we can calculate the page count.
    case itemsTotalCount > 0 && pageSize > 0:
      localPageCount = Math.ceil(itemsTotalCount / pageSize);
      break;

    // But if all else fails we set page count to `1` .
    default:
      localPageCount = 1;
      break;
  }

  // Determine markup properties
  const hasMultiplePages = localPageCount > 1;
  const Tagname = hasMultiplePages ? 'nav' : 'div';
  const attrs = {};
  if (hasMultiplePages) {
    attrs['aria-label'] = PAGINATION_ARIA_LABEL;
    attrs.role = 'pagination';
  }

  const classNames = classnames(
    'sage-pagination',
    className,
    {
      'sage-pagination--no-counter': !itemsTotalCount || hideCounter,
      [`sage-pagination--align-${align}`]: align,
    }
  );

  const renderPageCount = () => {
    // Do not render page count if no itemsTotalCount is provided.
    if (!itemsTotalCount || hideCounter) {
      return null;
    }

    // Configure props to use in all cases
    const classNames = classnames(
      'sage-pagination__count',
      {
        'sage-pagination__count--solo': localPageCount <= 1,
      }
    );
    const entryName = pluralize(itemsNoun || PAGINATION_DEFAULT_ITEMS_NOUN, itemsTotalCount);

    // If we have a page size provided,
    // calculate current numbers and output accordingly
    if (pageSize) {
      const first = pageSize * (currentPage - 1) + 1;
      const last = pageSize * currentPage;

      return (
        <span className={classNames}>
          {pageCountPrefix && <span className="sage-pagination__count-prefix">{pageCountPrefix}</span>}
          <strong>{first}</strong> – <strong>{last}</strong>{' '} of <strong>{itemsTotalCount}</strong> {entryName}
          {pageCountSuffix && <span className="sage-pagination__count-suffix">{pageCountSuffix}</span>}
        </span>
      );
    }

    // Default is to show total number of items
    return (
      <span className={classNames}>
        <strong>{itemsTotalCount}</strong> {entryName}
      </span>
    );
  };

  const handleInteractionProps = (page) => {
    const current = page === currentPage;
    if (pageURLFn) {
      return {
        current,
        url: pageURLFn(page)
      };
    }

    if (onClickPage) {
      return {
        current,
        onClick: () => onClickPage(page),
      };
    }

    return { current };
  };

  const renderPageItems = () => {
    if (localPageCount < 1 || hidePageButtons) {
      return null;
    }

    const items = [];
    let startPage = 1;

    // If current page is far enough from start
    // adjust start to center current page in possible buttons
    if (currentPage > maxPageButtons) {
      startPage = currentPage - Math.floor(maxPageButtons / 2);
    }

    // Or if current page is closer to the end
    // adjust start to be the last few items
    if (currentPage > (localPageCount - maxPageButtons)) {
      startPage = localPageCount - maxPageButtons;
    }

    // But, ensure start page is always above 0
    if (startPage < 1) {
      startPage = 1;
    }

    // Add page 1 and a gap if needed
    if (startPage > 1) {
      items.push(
        <PaginationItem
          key={uuid()}
          {...handleInteractionProps(1)}
        >
          {1}
        </PaginationItem>
      );
    }
    if (startPage > 2) {
      items.push(<PaginationItemGap key={uuid()} />);
    }

    for (let i = startPage; (i <= (startPage + maxPageButtons) && i <= localPageCount); i += 1) {
      items.push(
        <PaginationItem
          key={uuid()}
          {...handleInteractionProps(i)}
        >
          {i}
        </PaginationItem>
      );
    }

    // Add final page and a gap if needed
    if (startPage < localPageCount - maxPageButtons - 1) {
      items.push(<PaginationItemGap key={uuid()} />);
    }
    if (startPage < localPageCount - maxPageButtons) {
      items.push(
        <PaginationItem
          key={uuid()}
          {...handleInteractionProps(localPageCount)}
        >
          {localPageCount}
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Tagname className={classNames} {...rest}>
      {renderPageCount()}
      <ul className="sage-pagination__pages">
        <PaginationItem
          disabled={currentPage === 1}
          {...handleInteractionProps(currentPage - 1)}
        >
          {labels && labels.previous ? labels.previous : PAGINATION_LABEL_PREVIOUS}
        </PaginationItem>
        {renderPageItems()}
        <PaginationItem
          disabled={currentPage === localPageCount}
          {...handleInteractionProps(currentPage + 1)}
        >
          {labels && labels.next ? labels.next : PAGINATION_LABEL_NEXT}
        </PaginationItem>
      </ul>
    </Tagname>
  );
};

Pagination.defaultProps = {
  align: null,
  className: null,
  hideCounter: false,
  hidePageButtons: false,
  itemsTotalCount: null,
  itemsNoun: PAGINATION_DEFAULT_ITEMS_NOUN,
  labels: null,
  maxPageButtons: 4,
  onClickPage: null,
  pageCount: null,
  pageCountPrefix: null,
  pageCountSuffix: null,
  pageSize: null,
  pageURLFn: null,
};

Pagination.propTypes = {
  align: PropTypes.string,
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  hideCounter: PropTypes.bool,
  hidePageButtons: PropTypes.bool,
  itemsTotalCount: PropTypes.number,
  itemsNoun: PropTypes.string,
  labels: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
  }),
  maxPageButtons: PropTypes.number,
  onClickPage: PropTypes.func,
  pageCount: PropTypes.number,
  pageCountPrefix: PropTypes.string,
  pageCountSuffix: PropTypes.string,
  pageSize: PropTypes.number,
  pageURLFn: PropTypes.func,
};
