import React from 'react';
import './ButtonHero.css';

const Button = ({ onClickHandler, children }) => (
    <button className="btn-hero" onClick={onClickHandler}>{children}</button>
);

export default Button;