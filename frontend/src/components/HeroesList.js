import React, { useState } from 'react'
import Hero from './Hero'

const HeroesList = ({ heroes }) => {

	const [currentPage, setCurrentPage] = useState(1)

	const heroesPerPage = 1
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
		<div>
			{heroes.length === 0 ? (
				<h2>There are no heroes to show</h2>
			) :
			currentHeroes.map(hero => (
					<Hero key={hero.id} hero={hero} />
				)
			)
			}
			{currentPage === 1 ? (<div></div>) : (<button onClick={handleBack}> Back </button>)}
			{currentPage +1 !== lastPage ? (<button onClick={handleNext}> Next </button>) : (<div></div>)}
			
			
		</div>
	)

}

export default HeroesList