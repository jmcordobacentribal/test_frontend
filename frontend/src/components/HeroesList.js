import React from 'react'
import { useHeroes } from '../hooks/useHeroes'
import Hero from './Hero'


const HeroesList = () => {
	const [heroes, isLoading, error] = useHeroes([])
	return (
		<div>
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
							<Hero key={hero.id} id={hero.id} image={hero.images.md} name={hero.name} />
						))
			)}
		</div>
	)

}

export default HeroesList