import React from 'react';
import './style.css';

const SearchName = (props) => {
    
    return (
        <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search by Employee Last Name (search is case sensitive):</label>
        <input
          onChange={props.handleSearchChange}
          aria-label="Search"
          type="search"
          className="form-control"
          placeholder="Type an Employee's Last Name to begin"
        />
      </div>
    </form>

    );
}

export default SearchName;