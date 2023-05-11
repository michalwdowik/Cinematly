import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import TopRatedMovie from './TopRatedMovie'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const TopRatedMovies = () => {
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const movies = await fetchMovies({ type: 'topRated' })
            setTopRatedMovies(movies)
        }

        fetchTopRatedMovies()
    }, [])

    return (
        <Box sx={topRatedMovieCardsStyles}>
            {topRatedMovies.map((movie: Movie, rankPosition: number) => (
                <TopRatedMovie
                    key={movie.id}
                    movie={movie}
                    rankPosition={rankPosition}
                />
            ))}
        </Box>
    )
}

export default TopRatedMovies

/* --------------------------------- STYLES --------------------------------- */
const topRatedMovieCardsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    alignContent: 'center',
}
