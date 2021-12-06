import React from 'react'
import { useParams } from 'react-router-dom'
import { useHero } from '../../hooks/useHero'

import './style.css'

const HeroDetails = () => {

	let { id } = useParams()
	const [hero, isLoading, error] = useHero(id)

	return (
		<div>
			{
				isLoading ? (
					<h2>Loading...</h2>
				) : (
					error !== null ? (
						<h2>Error while getting data of a hero</h2>
					) : (
						<>
							<h1> {hero.nombre}</h1 >
							<div className="container--hero-details">
								<img src={hero.avatarURL} alt={hero.nombre} />
								<div className="hero-details">
									<p> Real name: {hero.nombreReal} </p>
									<p> Can fly: {hero.puedeVolar ? 'Yes' : 'No'} </p>
								</div>
							</div>
						</>
					)
				)
			}
		</div>
	)
}

export default HeroDetails
