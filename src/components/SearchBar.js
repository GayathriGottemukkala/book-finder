// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const onSearch = () => {
    handleSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a book title..."
        className="input"
      />
      <button onClick={onSearch} className="btn">Search</button>
    </div>
  );
};

export default SearchBar;
