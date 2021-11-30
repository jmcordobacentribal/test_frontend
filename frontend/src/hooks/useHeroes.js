import React, {useState, useEffect} from 'react'

/* 
    This hook fetches all superheroes from the API
    then returns 3 variables. an array of heroes, loading state and error   
*/
export const useHeroes = () => {
    const [heroes, setHeroes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const res = await fetch('https://akabab.github.io/superhero-api/api/all.json')
                const data = await res.json()

                setHeroes(data)
                console.log(data)
                setIsLoading(false)
            } catch(error) {
                setIsLoading(false)
                setError(error)
            }
        }
        fetchHeroes()
    },[])

    return [heroes, isLoading, error]
}