import React, { useState } from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'
import HeroesList from '../../components/HeroesList/HeroesList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useHeroes } from '../../hooks/useHeroes'
import { useSearchHero } from '../../hooks/useSearchHero'

import './style.css'


const Home = () => {
	const [canFly, setCanFly] = useState(false)
	const [heroes, isLoading, error] = useHeroes()
	const [query, setQuery] = useState('')
	const [filteredHeroes] = useSearchHero(heroes, query)

	const canFlyHeroes = (heroesList) => {
		return heroesList.filter(hero => hero.puedeVolar)
	}

	return (
		<div>
			<h1>List of superheroes!</h1>
			<div className="header">
				<SearchBar
					superheroName={query}
					setSuperheroName={setQuery} />
				<Checkbox
					isChecked={canFly}
					handleChange={setCanFly} />
			</div>

			{isLoading ? (
				<div>Loading...</div>
			) : (
				error !== null ? (  
					<h2>Error while getting data...</h2>
				) : (
					canFly ? (
						<div>
						<HeroesList heroes={query === '' ? canFlyHeroes(heroes) : canFlyHeroes(filteredHeroes)} />
						</div>
					) : (
						<HeroesList heroes={query === '' ? heroes : filteredHeroes} />
					)
				)
			)}
		</div>
	)
}

export default Home