import React, { useState } from 'react'
import Hero from '../Hero/Hero'

import './style.css'

const HeroesList = ({ heroes }) => {

	const [currentPage, setCurrentPage] = useState(1)

	const heroesPerPage = 8
	const lastHeroIndex = currentPage * heroesPerPage;
	const firstHeroIndex = lastHeroIndex - heroesPerPage;
	const currentHeroes = heroes.slice(firstHeroIndex, lastHeroIndex)
	const lastPage = Math.ceil(heroes.length / heroesPerPage) + 1

	const handleNext = () => {
		setCurrentPage(currentPage + 1)
	}

	const handleBack = () => {
		setCurrentPage(currentPage - 1)
	}

	return (
		<main>
			<div className="container" >
				{heroes.length === 0 ? (
					<h2>There are no heroes to show</h2>
				) :
					currentHeroes.map(hero => (
						<Hero key={hero.id} hero={hero} />
					)
					)
				}
			</div>
			<div className="container-pagination">
			{currentPage === 1 ? (<div></div>) : (<button className="button-pagination" onClick={handleBack}> Back </button>)}
			{currentPage + 1 !== lastPage ? (<button className="button-pagination" onClick={handleNext}> Next </button>) : (<div></div>)}
			</div>

		</main>
	)

}

export default HeroesList