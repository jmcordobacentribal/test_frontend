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
							<h1> {hero.name}</h1 >
							<img src={hero.images.sm} />
							<ul>
								<li> Gender: {hero.appearance.gender} </li>
								<li> Race: {hero.appearance.race} </li>
								<li> Eye color: {hero.appearance.eyeColor} </li>
							</ul>
						</div>
					)
				)
			}
		</div>
	)
}

export default HeroDetails
