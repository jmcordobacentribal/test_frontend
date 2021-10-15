import React from 'react';
import PropTypes from 'prop-types';
import './CheckBoxHero.css';

const CheckBoxHero = ({ label, value, checked, handleChange }) => (
    <div className="radio-hero-container">
        <input 
            type="checkbox" 
            className="radio-hero"
            id="radio-hero"
            name="radio-hero"
            checked={checked}
            onChange={handleChange}
        />
        <label htmlFor="radio-hero">{label}</label>
         {checked.toString()}
    </div>
);

CheckBoxHero.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    handleChange: PropTypes.func
}

export default CheckBoxHero;