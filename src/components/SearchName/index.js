import React from 'react';
import './style.css';

const SearchName = (props) => {
    
    return (
        <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search by Employee Name:</label>
        <input
          onChange={props.handleSearchChange}
          aria-label="Search"
          type="search"
          className="form-control"
          placeholder="Type an Employee Name to begin"
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>

    );
}

export default SearchName;