import React from 'react'

const SearchBar = ({ superheroName, setSuperheroName}) => {
	return (
		<input
			placeholder="search superhero"
			value={superheroName}
			onChange={e => setSuperheroName(e.target.value)} />
	)
}

export default SearchBar