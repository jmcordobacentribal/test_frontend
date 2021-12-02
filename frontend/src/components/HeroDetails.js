import React from 'react'
import { useParams } from 'react-router-dom'
import { useHero } from '../hooks/useHero'

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
						<h2>{error}</h2>
					) : (
						<div>
							<h1> {hero.nombre}</h1 >
							<img src={hero.avatarURL} alt={hero.nombre} />
							<ul>
								<li> Puede volar: {hero.puedeVolar ? 'Si' : 'No'} </li>
								<li> Nombre real: {hero.nombreReal} </li>
							</ul>
						</div>
					)
				)
			}
		</div>
	)
}

export default HeroDetails
