import React from 'react'
import { useNavigate } from 'react-router'

const Hero = ({id, image, name}) => {
    const navigate = useNavigate()
    
    const handleHeroDetails = (id) => {
        navigate(`/hero/${id}`)
    }

    return(
        <div>
            <img src={image} alt={name} />
            <h1> {name} </h1>
            <button onClick={() => handleHeroDetails(id)} >Details</button>            
        </div>
    )
}

export default Hero