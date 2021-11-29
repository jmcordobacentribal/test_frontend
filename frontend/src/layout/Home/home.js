import React from 'react'
import { useHeroes } from '../../hooks/useHeroes'

const Home = () => {
	const [heroes, isLoading, error] = useHeroes([])
	return (
		<div>
			<h1>list of superheroes!</h1>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				error !== null ? (
					<h2> {error}</h2>
				) :
				heroes.lenth === 0 ? (
					<h2>There are no heroes to show</h2>
				) : 
				heroes.map(hero => (
					<h1 key={hero.id}> { hero.name } </h1>
				))
			) }

		</div>
	)
}

export default Home