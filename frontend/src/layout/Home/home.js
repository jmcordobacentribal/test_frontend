import React, { useState } from 'react'
import HeroesList from '../../components/HeroesList'
import SearchBar from '../../components/SearchBar'
import { useHeroes } from '../../hooks/useHeroes'
import { useSearchHero } from '../../hooks/useSearchHero'


const Home = () => {
	const [canFly, setCanFly] = useState(false)
	const [heroes, isLoading, error] = useHeroes(canFly)
	const [query, setQuery] = useState('')
	const [filteredHeroes] = useSearchHero(heroes, query, canFly)

	return (
		<div>
			<h1>list of superheroes!</h1>
			<SearchBar 
				superheroName={query} 
				setSuperheroName={setQuery} />
			<label>
				<span>Filter by Female ? </span>
				<input
				type="checkbox"
				checked={canFly}
				onChange={e => setCanFly(!canFly)}/>
			</label>
			
			{isLoading ? (
				<div>Loading...</div>
			) : (
				error !== null ? (
					<h2> {error}</h2>
				) : (
					<HeroesList heroes={query === '' ? heroes : filteredHeroes}/>
				)
			)}
		</div>
	)
}

export default Home