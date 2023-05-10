import { Box } from '@mui/material'
import TopRatedMovie from './TopRatedMovie'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const fetchedTopRatedMovies = await fetchMovies({ type: 'topRated' })
const TopRatedMovies = () => {
    return (
        <Box sx={topRatedMovieCardsStyles}>
            {fetchedTopRatedMovies.map((movie: Movie, rankPosition: number) => (
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
