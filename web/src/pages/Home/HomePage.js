import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Header, CardHero, SearchHero, CheckBoxHero } from '../../components';
import { getSuperHeroes } from '../../lib/httpRequest';

function HomePage() {
    const [heroes, setHeroes] = useState([]);
    const [searchHeroResults, setSearchHeroResults] = useState([]);
    const [searchHeroTerm, setSearchHeroTerm] = useState('');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        fetchHeroes()

        const resultsToSearch = heroes.filter(hero => hero.nombre.toLowerCase().includes(searchHeroTerm));
        setSearchHeroResults(resultsToSearch);

    }, [searchHeroTerm]);

    const fetchHeroes = async () => {
        try {
            const superHeroes = await getSuperHeroes();
            if (superHeroes.status === 200) {
                setHeroes(superHeroes.data.response.data);
            } else {
                console.log('some error in request');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearchHeroChange = event => {
        setSearchHeroTerm(event.target.value);
    };

    const handleChangeCheckBox = () => {
        setChecked(!checked);
    };

    return (
        <div className="homepage">
            <Header/>
            <br/><br/>
            <div className="container">
                <div className="search-hero-box">
                    <SearchHero 
                        placeholder="Encuentra tu super heroe fav..."
                        value={searchHeroTerm}
                        onChangeHandler={handleSearchHeroChange}
                    />
                    <br></br>
                    <CheckBoxHero 
                        label="Filtrar por: Pueden Volar" 
                        checked={checked}
                        handleChange={handleChangeCheckBox}    
                    />
                </div>
                <br/>
                {
                    searchHeroTerm ? 
                    searchHeroResults.map((hero) => (
                        <CardHero 
                            key={hero.id} 
                            heroId={hero.id}
                            avatar={hero.avatarURL}
                            nombre={hero.nombre} 
                            nombreReal={hero.nombreReal}
                            puedeVolar={hero.puedeVolar}
                        />
                    ))
                    : 
                    heroes.map((hero) => (
                        <CardHero 
                            key={hero.id} 
                            heroId={hero.id}
                            avatar={hero.avatarURL}
                            nombre={hero.nombre} 
                            nombreReal={hero.nombreReal}
                            puedeVolar={hero.puedeVolar}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default HomePage;