import { useState, useEffect } from 'react'

export const useSearchHero = (heroesList, query, canFly) => {
	const [filteredHeroes, setFilteredHeroes] = useState([])

	/**
	 * TODO: Filter heroes by name from heroesList
	 */
	useEffect(() => {
		const filterSearch = () => {
			if (query === '') {
				setFilteredHeroes(heroesList)
			} else {
				const filtered = heroesList.filter(hero => (
					hero.name.toLowerCase().includes(query.toLowerCase() )
				))
				setFilteredHeroes(filtered)

				if(canFly) {
					const filteredHeroesCanFly = filteredHeroes.filter(hero => (
							hero.appearance.gender === 'Female'
					))
					setFilteredHeroes(filteredHeroesCanFly)
			}
			}

		}
		filterSearch()

	}, [query, canFly])



	return [filteredHeroes]
}
