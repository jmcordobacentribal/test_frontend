import React from "react"

import './style.css'

const Checkbox = ({ isChecked, handleChange }) => {
	return (
		<label className="container-label">
			<input
			  className="container-label--input"
				type="checkbox"
				checked={isChecked}
				data-testid="filterCheckbox"
				onChange={e => handleChange(!isChecked)} />
			<span className="container-label--span">Superheroes with ability to fly</span>
		</label>
	)
}

export default Checkbox