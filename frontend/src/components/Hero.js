import React from 'react'
import { useNavigate } from 'react-router'

const Hero = ({hero}) => {
    const navigate = useNavigate()
    
    const handleHeroDetails = (id) => {
        navigate(`/hero/${id}`)
    }

    return(
        <div>
            <img src={hero.avatarURL} alt={hero.nombre} />
            <h1> {hero.nombre} </h1>
            <button onClick={() => handleHeroDetails(hero.id)} >Details</button>            
        </div>
    )
}

export default Hero