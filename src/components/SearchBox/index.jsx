import React from 'react';
import './styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
}

export default SearchBox;