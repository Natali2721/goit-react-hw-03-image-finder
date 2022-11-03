import React from 'react';
//import PropTypes from 'prop-types';

export const SearchBar = () => (
  <div>
    <form className="search-form" id="search-form">
      <input
        type="text"
        name="searchQuery"
        autoComplete="off"
        placeholder="Search images..."
      />
      <button type="submit">Search</button>
    </form>
  </div>
);
