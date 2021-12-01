import React, { useState } from 'react'
import HeroesList from '../../components/HeroesList'
import SearchBar from '../../components/SearchBar'
import { useHeroes } from '../../hooks/useHeroes'
import { useSearchHero } from '../../hooks/useSearchHero'


const Home = () => {

	const [heroes, isLoading, error] = useHeroes([])
	const [query, setQuery] = useState('')
	const [filteredHeroes] = useSearchHero(heroes, query)

	return (
		<div>
			<h1>list of superheroes!</h1>
			<SearchBar superheroName={query} setSuperheroName={setQuery}/>
			<HeroesList heroes={query === '' ? heroes : filteredHeroes} isLoading={isLoading} error={error}/>
		</div>
	)
}

export default Home