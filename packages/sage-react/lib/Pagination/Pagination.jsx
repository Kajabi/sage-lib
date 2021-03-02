import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import pluralize from 'pluralize';
import {
  PAGINATION_ARIA_LABEL,
  PAGINATION_DEFAULT_ITEMS_NOUN,
  PAGINATION_LABEL_NEXT,
  PAGINATION_LABEL_PREVIOUS,
} from './configs';
import { PaginationItem } from './PaginationItem';

export const Pagination = ({
  className,
  currentPage,
  labels,
  itemsNoun,
  itemsTotalCount,
  onClickPage,
  pageCount,
  pageSize,
  pageURLFn,
}) => {
  const hasMultiplePages = pageSize > 1;
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
      'sage-pagination--no-counter': !itemsTotalCount,
    }
  );

  const renderPageCount = () => {
    // Do not render page count if not itemsTotalCount is provided.
    if (!itemsTotalCount) {
      return null;
    }

    // Configure props to use in all cases
    const classNames = classnames(
      'sage-pagination__count',
      {
        'sage-pagination__count--solo': pageCount <= 1,
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
          <strong>{first}</strong> – <strong>{last}</strong>{' '}
          of <strong>{itemsTotalCount}</strong> {entryName}
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
    if (pageURLFn) {
      return {
        url: pageURLFn(page)
      };
    }

    if (onClickPage) {
      return {
        onClick: () => onClickPage(page),
      };
    }

    return {};
  }

  return (
    <Tagname className={classNames}>
      {renderPageCount()}
      {pageCount > 1 && (
        <ul className="sage-pagination__pages">
          <PaginationItem disabled={currentPage === 1} {...handleInteractionProps(1)}>
            {labels && labels.previous ? labels.previous : PAGINATION_LABEL_PREVIOUS}
          </PaginationItem>
          <PaginationItem {...handleInteractionProps(1)}>
            1
          </PaginationItem>
          <PaginationItem {...handleInteractionProps(2)}>
            2
          </PaginationItem>
          <PaginationItem disabled={currentPage === pageCount} {...handleInteractionProps(currentPage + 1)}>
            {labels && labels.next ? labels.next : PAGINATION_LABEL_NEXT}
          </PaginationItem>
        </ul>
      )}
    </Tagname>
  );
};

Pagination.defaultProps = {
  className: null,
  itemsTotalCount: null,
  itemsNoun: PAGINATION_DEFAULT_ITEMS_NOUN,
  labels: null,
  pageCount: 1,
  pageSize: null,
  pageURLFn: null,
};

Pagination.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  onClickPage: PropTypes.func,
  itemsTotalCount: PropTypes.number,
  itemsNoun: PropTypes.string,
  labels: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
  }),
  pageCount: PropTypes.number,
  pageSize: PropTypes.number,
  pageURLFn: PropTypes.func,
};
