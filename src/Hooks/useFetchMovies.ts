import { useState, useEffect } from 'react'
import { Movie, MovieCategory } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const useFetchMovie = (category: MovieCategory) => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchMoviesByCategory = async () => {
            const fetchedMovies = await fetchMovies({ movieCategory: category })
            setMovies(fetchedMovies)
        }

        fetchMoviesByCategory()
    }, [category])

    return movies
}

export default useFetchMovie
