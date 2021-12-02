import React from "react"

const Checkbox = ({filterBy, isChecked, handleChange}) => {
  return(
    <label>
				<span>Filter by {filterBy} ? </span>
				<input
				type="checkbox"
				checked={isChecked}
				onChange={e => handleChange(!isChecked)}/>
			</label>
  )
}

export default Checkbox