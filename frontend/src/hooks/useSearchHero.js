import { useState, useEffect } from 'react'

export const useSearchHero = (heroesList, query) => {
	const [filteredHeroes, setFilteredHeroes] = useState([])

	/**
	 * TODO: Filter heroes by name from heroesList
	 */
	useEffect(() => {
		const filterSearch = (query) => {
			if (query === '') {
				setFilteredHeroes(heroesList)
			} else {
				const filtered = heroesList.filter(hero => (
					hero.name.toLowerCase().includes(query.toLowerCase())
				))
				setFilteredHeroes(filtered)
			}

		}
		filterSearch(query)

	}, [query])



	return [filteredHeroes]
}
