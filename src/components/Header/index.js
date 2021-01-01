import React from 'react';
import "./style.css";
import SearchName from '../SearchName';

function Header() {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
    
        <SearchName>

        </SearchName>
        </div>
    );
}

export default Header;