import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Search from '../Search';
import TypeaheadPanel from './TypeaheadPanel';
import { useFocusTrap } from '../hooks';

const A11Y_ID = uuid();

const Typeahead = ({
  items,
  maxResults,
  ...rest
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useFocusTrap({
    active: open,
    deactivateFunc: () => setOpen(false),
    containerRef: containerRef
  });

  useEffect(() => {
    const value = searchValue.toUpperCase(),
          results = [];

    items.forEach(item => {
      if (results.length >= maxResults) return;
      if (item.title.toUpperCase().includes(value)) results.push(item);
    });

    setSearchResults(results);
  }, [searchValue]);

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
        contained={true}
        onChange={e => {
          setSearchValue(e.target.value);
          e.target.value.length ? setOpen(true) : setOpen(false);
        }}
        onClear={() => {
          setSearchValue('');
          setOpen(false);
        }}
        value={searchValue}
      />
      {open
        && <TypeaheadPanel
            searchValue={searchValue}
            items={searchResults}
            role="listbox"
            id={A11Y_ID}
          />
      }
    </div>
  );
};

Typeahead.defaultProps = {
  maxResults: 5
};

Typeahead.propTypes = {
  items: TypeaheadPanel.propTypes.items,
  maxResults: PropTypes.number
};

export default Typeahead;
