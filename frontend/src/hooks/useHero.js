import {useState, useEffect} from 'react'
import { API_URL } from '../services/ApiConfig'

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
                const res = await fetch(`${API_URL}/api/v1/test/superheroes/${id}`)
                const data = await res.json()

                setHero(data)
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