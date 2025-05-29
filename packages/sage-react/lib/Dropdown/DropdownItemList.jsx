/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from './DropdownItem';
import { DropdownItemSearch } from './DropdownItemSearch';

export const DropdownItemList = ({
  allowMultiselect,
  customSearchFilter,
  filterActions,
  groupId,
  items,
  localSelectedItems,
  onExit,
  onSearch,
  searchable,
  searchPlaceholder,
  ...rest
}) => {
  const [searchTerms, updateSearchTerms] = useState('');
  const [filteredItems, updateFilteredItem] = useState(items);

  useEffect(() => {
    const refilter = (filterItems, filterSearchTerms) => {
      if (!filterSearchTerms || filterSearchTerms === '') {
        return filterItems;
      }

      let refilteredItems = [];
      if (customSearchFilter) {
        refilteredItems = customSearchFilter(items, searchTerms);
      } else {
        refilteredItems = items.filter(({ label }) => label.toUpperCase()
          .includes(
            searchTerms.toUpperCase()
          ));
      }
      return refilteredItems;
    };

    const refilteredItems = refilter(items, searchTerms);
    updateFilteredItem(refilteredItems);
  }, [customSearchFilter, items, searchTerms]);

  const onChangeSearchTerms = (value) => {
    updateSearchTerms(value);
    onSearch(value);
  };

  return (
    <>
      {searchable && (
        <DropdownItemSearch
          placeholder={searchPlaceholder}
          onChangeSearchTerms={onChangeSearchTerms}
        />
      )}
      <ul className="sage-dropdown__menu" role="menu" {...rest}>
        {localSelectedItems.length > 0 && localSelectedItems.map((item, i) => (
          <DropdownItem
            borderAfter={i === localSelectedItems.length - 1}
            groupId={groupId}
            hasCheckbox={false}
            key={`item.id-${i}-${item.key}-${item.label}-selected-key`}
            onExit={onExit}
            {...item}
          />
        ))}
        {filteredItems.map((item, i) => (
          <DropdownItem
            groupId={groupId}
            hasCheckbox={allowMultiselect}
            key={`item.id-${i}-${item.label}-key`}
            onExit={onExit}
            {...item}
          />
        ))}
        {(searchTerms !== '' && !items.some((item) => item.label === searchTerms)) && filterActions}
      </ul>
    </>
  );
};

const itemsPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  })
);

DropdownItemList.itemsPropTypes = itemsPropTypes;

DropdownItemList.defaultProps = {
  allowMultiselect: false,
  customSearchFilter: null,
  filterActions: null,
  groupId: null,
  items: [],
  localSelectedItems: [],
  onExit: (evt) => evt,
  onSearch: (evt) => evt,
  searchable: false,
  searchPlaceholder: 'Find',
};

DropdownItemList.propTypes = {
  allowMultiselect: PropTypes.bool,
  customSearchFilter: PropTypes.func,
  filterActions: PropTypes.node,
  groupId: PropTypes.string,
  items: itemsPropTypes,
  localSelectedItems: itemsPropTypes,
  onExit: PropTypes.func,
  onSearch: PropTypes.func,
  searchable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
};
