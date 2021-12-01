import React from 'react'
import Hero from './Hero'


const HeroesList = ({heroes, isLoading, error}) => {
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