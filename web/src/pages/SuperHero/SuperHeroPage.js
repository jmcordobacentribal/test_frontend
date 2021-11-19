import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSuperHeroesById } from '../../lib/httpRequest';
import { Header, CardHero } from '../../components';

function SuperHeroPage() {
    const [hero, setHero] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchHeroe(id);
    }, []);

    const fetchHeroe = async (id) => {
        try {
            const response = await getSuperHeroesById(id);
            if (response.status === 200) {
                const { data } = response;
                setHero(data.response[0]);
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="superhero-page">
            <Header title={hero.nombre}/>
            <br/>
            <br/>
            <CardHero
                nombre={hero.nombre}
                nombreReal={hero.nombreReal}
                puedeVolar={hero.puedeVolar}
                avatar={hero.avatarURL}
            />
        </div>
    )
}

export default SuperHeroPage;