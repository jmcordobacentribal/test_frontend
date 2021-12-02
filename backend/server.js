const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080

const heroes = require('./heroes.json')

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/v1/test/superheroes', (req, res) => {
    res.json(heroes)
})

app.get('/api/v1/test/superheroes/:id', (req, res) => {
    const id = req.params.id
    const hero = heroes.data.find(hero => hero.id == id)

    if(hero === undefined) {
        return res.status(404).send('hero not found')
    } else {
        return res.status(200).json(hero)
    }
})

app.listen(port, () => {
    console.log(`listening at  http://localhost:${port}`)
})