import { useState, useEffect } from 'react'
import { Movie, MovieCategory } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const useFetchMovies = (category: MovieCategory, movieTitle?: string) => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchMoviesByCategory = async () => {
            const fetchedMovies = await fetchMovies({
                movieCategory: category,
                movieTitle,
            })
            setMovies(fetchedMovies)
        }

        fetchMoviesByCategory()
    }, [category, movieTitle])

    return movies
}

export default useFetchMovies
