import React from "react"

const Checkbox = ({isChecked, handleChange}) => {
  return(
    <label>
				<span>Superheroes with ability to fly</span>
				<input
				type="checkbox"
				checked={isChecked}
				data-testid="filterCheckbox"
				onChange={e => handleChange(!isChecked)}/>
			</label>
  )
}

export default Checkbox