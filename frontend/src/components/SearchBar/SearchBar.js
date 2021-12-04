import React from 'react'
import './style.css'

const SearchBar = ({ superheroName, setSuperheroName}) => {
	return (
		<input
			className='header-input'
			placeholder="search superhero"
			value={superheroName}
			onChange={e => setSuperheroName(e.target.value)} />
	)
}

export default SearchBar