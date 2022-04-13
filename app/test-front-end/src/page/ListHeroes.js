import React, {useEffect} from 'react'
import useGetHeroe from '../customHook/useGetHeroe'
import Hero from '../components/Hero';
const ListHeroes = () => {

    const {getHeroes} = useGetHeroe();
    useEffect(() => {
    getHeroes()
    }, [])
    
  return (
    <div><Hero/></div>
  )
}

export default ListHeroes