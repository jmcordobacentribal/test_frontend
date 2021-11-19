import React from 'react';
import PropTypes from 'prop-types';
import './CardHero.css';
import { Link } from 'react-router-dom';

import { ButtonHero } from '../index';

const CardHero = ({ nombre, nombreReal, puedeVolar, avatar, heroId }) => (
    
    <div className="card-hero">
        <div className="card-avatar">
            <img src={avatar} alt="avatar-hero" width="80px" height="80px" />
        </div>
        <div className="card-name">
            <h2>{nombre}</h2>
            <span>{nombreReal}</span>
        </div>
        <div className="card-flying"  style={(puedeVolar ? { color: 'green'} : {color: 'red'})}>
            <span>{puedeVolar ? 'PuedeVolar' : 'No puede volar'}</span>
        </div>
        <br/>
        { heroId ? (
            <div className="card-button">
                <Link to={`/hero/${heroId}`}>
                    <ButtonHero>Ver Heroe</ButtonHero>
                </Link>
            </div>
        ) : (
            <div className="card-button">
                <Link to="/">
                    <ButtonHero>Volver</ButtonHero>
                </Link>
            </div>
        )}
    </div>
);

CardHero.propTypes = {
    nombre: PropTypes.string.isRequired,
    nombreReal: PropTypes.string.isRequired,
    puedeVolar: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    heroId: PropTypes.number
};

export default CardHero;