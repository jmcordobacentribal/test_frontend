import React from 'react';
import { FrownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './NoMatchPage.css';

const NoMatchPage = () => (
    <div className="no-match-page">
        <span>
            <FrownOutlined style={{fontSize:"50px", color: "#0984e3"}}/>
        </span>
        <h1>Pagina no encontrada</h1>
        <br/>
        <Link to="/">
            <h2>Vuelve a Home :)</h2>
        </Link>
    </div>
);

export default NoMatchPage;