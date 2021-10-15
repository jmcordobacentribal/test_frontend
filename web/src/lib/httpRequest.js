import axios from 'axios';
import { baseUrl, superHeroesUrl } from './constants';

async function getSuperHeroes() {
    try {
        const response = await axios.get(`${baseUrl}${superHeroesUrl}`);
        return response;
    } catch (error) {
        return new Error(error.message);
    }
}

async function getSuperHeroesById(heroeId) {
    try {
        const response = await axios.get(`${baseUrl}${superHeroesUrl}/${heroeId}`);
        return response;
    } catch (error) {
        return new Error(error.message);
    }
}

export { getSuperHeroes, getSuperHeroesById };