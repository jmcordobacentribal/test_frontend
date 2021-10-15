import React from 'react';
import PropTypes from 'prop-types';
import './SearchHero.css';

const SearchHero = ({ placeholder, value, onChangeHandler, defaultValue }) => (
    <input 
        type="text" 
        placeholder={placeholder}
        className="search-hero-input"
        value={value}
        defaultValue={defaultValue}
        onChange={onChangeHandler}
    />
);

SearchHero.propTypes = { 
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired
}

export default SearchHero;