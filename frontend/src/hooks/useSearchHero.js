import { useState, useEffect } from 'react'

/**
 * this hook searches a hero or heroes by name
 * @param {*} heroesList 
 * @param {*} query 
 * @returns {*} list of heroes that matches the query
 */
export const useSearchHero = (heroesList, query) => {
	const [filteredHeroes, setFilteredHeroes] = useState([])

	useEffect(() => {
		const filterSearch = () => {
			if (query === '') {
				setFilteredHeroes(heroesList)
			} 
			else {
				const filtered = heroesList.filter(hero => (
					hero.nombre.toLowerCase().includes(query.toLowerCase())
				))
				setFilteredHeroes(filtered)
			}
		}
		filterSearch()

	}, [query])



	return [filteredHeroes]
}
