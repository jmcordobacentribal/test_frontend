import React, { useState } from 'react'
import Checkbox from '../../components/Checkbox'
import HeroesList from '../../components/HeroesList'
import SearchBar from '../../components/SearchBar'
import { useHeroes } from '../../hooks/useHeroes'
import { useSearchHero } from '../../hooks/useSearchHero'


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
			<h1>list of superheroes!</h1>
			<SearchBar
				superheroName={query}
				setSuperheroName={setQuery} />
			<Checkbox
				filterBy={'Can Fly'}
				isChecked={canFly}
				handleChange={setCanFly} />

			{isLoading ? ( 
				<div>Loading...</div>
			) : (
				error !== null ? (
					<h2> {error}</h2>
				) : (
					canFly ? (
						<HeroesList heroes={query === '' ? canFlyHeroes(heroes) : canFlyHeroes(filteredHeroes)} />
					) : (
						<HeroesList heroes={query === '' ? heroes : filteredHeroes} />
					)
				)
			)}
		</div>
	)
}

export default Home