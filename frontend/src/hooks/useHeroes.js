import {useState, useEffect} from 'react'
import { API_URL } from '../services/ApiConfig'

/**
 * This hook fetches all superheroes from the API
 * then returns 3 variables. an array of heroes, loading state and error   
 * @param {*}  
 * @returns [heroes, isLoading, error]
 */
export const useHeroes = () => {
    const [heroes, setHeroes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const res = await fetch(`${API_URL}/api/v1/test/superheroes`)
                const data = await res.json()

                setHeroes(data.data)
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