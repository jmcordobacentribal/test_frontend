import React from 'react';
import './Header.css';

import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <header>
        <h1>{title ? title : 'SuperHeroes App'}</h1>
    </header>
);

Header.propTypes = {
    title: PropTypes.string
}

export default Header;