import React, { useContext } from 'react';
import './style.css';
import EmployeeContext from '../../utils/EmployeeContext';

const SearchName = () => {
    const context = useContext(EmployeeContext);
    return (
        <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search by Employee Name:</label>
        <input
          onChange={e => context.handleSearchChange(e)}
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