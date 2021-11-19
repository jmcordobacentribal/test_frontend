const express = require('express');
const cors    = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const superHeroes = require('./superheroes.json');

app.get('/', (req, res) => {
    return res.json({
        status: 200,
        message: 'Welcome to SuperHero API :)'
    })
}); 

const heroesFiltered = (heroes, boolean) => heroes.filter(heroe => heroe.puedeVolar === (boolean === 'true' ? true : false));

const hero = (heroArr) => {
    let heroObj = {};
    for (let i = 0; i < heroArr.length; i++) {
        heroObj[i] = heroArr[i];
    }
    return heroObj;
}

app.get('/api/v1/test/superheroes', (req, res) => {
    const { data } = superHeroes;
    const { puedeVolar } = req.query;
    if (puedeVolar) {
        return res.json({
            status: 200,
            response: heroesFiltered(data, puedeVolar)
        })
    } else {
        return res.json({
            status: 200,
            response: superHeroes
        })
    }
});

app.get('/api/v1/test/superheroes/:id', (req, res) => {
    const heroId = req.params.id;
    const getHero = superHeroes.data.filter((hero) => {
        return hero.id === parseInt(heroId);
    });

    return res.json({
        status: 200,
        response: hero(getHero)
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
});