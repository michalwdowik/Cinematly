import { useState, useEffect } from 'react'
import fetchActors from '../Helpers/fetchActors'
import { ActorType } from '../TrendingActors/types'

const useFetchActors = () => {
    const [actors, setActors] = useState<ActorType[]>([])

    useEffect(() => {
        const fetchMoviesByCategory = async () => {
            const fetchedMovies = await fetchActors()
            setActors(fetchedMovies)
        }

        fetchMoviesByCategory()
    }, [])

    return actors
}

export default useFetchActors
