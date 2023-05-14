import { Box } from '@mui/material'
import { Movie } from '../MovieCard/types'
import { topRatedMovies } from '../Helpers/fetchMovies'
import TopRatedMovie from './TopRatedMovie'

const TopRatedMovies = () => {
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
