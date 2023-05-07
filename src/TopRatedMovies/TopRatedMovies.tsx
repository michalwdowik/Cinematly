import { Box } from '@mui/material'
import topRatedMovies from '../Helpers/fetchTopRatedMovies'
import { Movie } from '../types/MoviesTypes'
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

const topRatedMovieCardsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    alignContent: 'center',
}
