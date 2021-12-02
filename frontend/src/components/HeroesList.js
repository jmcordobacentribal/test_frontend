import React from 'react'
import Hero from './Hero'


const HeroesList = ({ heroes }) => {
	return (
		<div>
			{heroes.length === 0 ? (
				<h2>There are no heroes to show</h2>
			) :
				heroes.map(hero => (
					<Hero key={hero.id} hero={hero} />
				)
				)}
		</div>
	)

}

export default HeroesList