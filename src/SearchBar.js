import React from 'react';


const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for books..."
      />
      <button id='btn' onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
