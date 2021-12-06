import React from 'react'
import { useNavigate } from 'react-router'

import './style.css'

const Hero = ({ hero }) => {
	const navigate = useNavigate()

	const handleHeroDetails = (id) => {
		navigate(`/hero/${id}`)
	}

	return (
		<div className="container-hero">
			<h3> {hero.nombre} </h3>
			<img onClick={() => handleHeroDetails(hero.id)} src={hero.avatarURL} alt={hero.nombre} />
		</div>
	)
}

export default Hero