import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { Search } from '../Search';
import { useFocusTrap, useDebounceEffect } from '../common/hooks';
import { TypeaheadPanel } from './TypeaheadPanel';

/* eslint-disable react-hooks/exhaustive-deps */

const A11Y_ID = uuid();

export const Typeahead = ({
  contained,
  filterFn,
  items,
  maxResults,
  onClearHook,
  placeholder,
  searchFn,
  ...rest
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const filterList = (_items) => {
    const newItems = (searchValue && filterFn)
      ? filterFn(searchValue, _items, maxResults)
      : _items;
    setSearchResults(newItems.slice(0, maxResults));
  };

  useFocusTrap({
    active: open,
    containerRef,
    onDeactivateFn: () => setOpen(false),
    // NOTE: `returnFocus` prevents the search input from being refocused when Typeahead is closed,
    // which prevents blocking the 'scrollTo element' UX pattern that is used with this component
    returnFocus: false,
  });

  // Watch items and filter when updated
  useEffect(() => filterList(items), [items]);

  // Update list when search value changes (after debounce)
  // If a search function is provided it is called,
  // trusting that that function will handle updating `items` externally.
  // Otherwise, we proceed to call the filtering function.
  useDebounceEffect(() => {
    if (searchFn) {
      searchFn(searchValue);
    } else {
      filterList(items);
    }
  }, [searchValue], 200);

  const onSearchInteraction = (evt) => {
    setSearchValue(evt.target.value);
    if (evt.target.value.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const onSearchClear = () => {
    setSearchValue('');
    setOpen(false);

    if (onClearHook) {
      onClearHook();
    }
  };

  const onPanelInteraction = (evt) => {
    if (evt.target.closest('button, a')) setOpen(false);
  };

  return (
    <div
      className="sage-typeahead"
      ref={containerRef}
      aria-expanded={open}
      aria-haspopup="listbox"
      aria-owns={A11Y_ID}
      {...rest}
    >
      <Search
        contained={contained}
        placeholder={placeholder}
        value={searchValue}
        onChange={onSearchInteraction}
        onKeyDown={(evt) => (evt.which === 13) && onSearchInteraction(evt)}
        onClear={onSearchClear}
      />
      {open && (
        <TypeaheadPanel
          items={searchResults}
          onClick={onPanelInteraction}
          onKeyDown={(evt) => (evt.which === 13) && onPanelInteraction(evt)}
          searchValue={searchValue}
          role="listbox"
          id={A11Y_ID}
        />
      )}
    </div>
  );
};

Typeahead.defaultProps = {
  contained: true,
  filterFn: (_value, _items, _limit = 5) =>
    _items.filter(({ title }) =>
      title.toUpperCase().includes(_value.toUpperCase())
    ).slice(0, _limit),
  items: [],
  maxResults: 5,
  onClearHook: null,
  placeholder: 'Find',
  searchFn: null,
};

Typeahead.propTypes = {
  contained: PropTypes.bool,
  filterFn: PropTypes.func,
  items: TypeaheadPanel.propTypes.items,
  maxResults: PropTypes.number,
  onClearHook: PropTypes.func,
  placeholder: PropTypes.string,
  searchFn: PropTypes.func,
};
