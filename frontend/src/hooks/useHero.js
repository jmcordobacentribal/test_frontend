import React, {useState, useEffect} from 'react'

/*
    This hook fetches the details of a superhero, using their id.
    Then returns 3 variables, an object with data of the superhero, 
    loading state and error
*/
export const useHero = (id) => {
    const [hero, setHero] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchHero = async (id) => {
            try {
                const res = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
                const data = await res.json()

                setHero(data)
                console.log(data)
                setIsLoading(false)
            } catch(error) {
                setIsLoading(false)
                setError(error)
            }
        }
        fetchHero(id)
    },[]) 

    return [hero, isLoading, error]
}