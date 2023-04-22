import { Box } from '@mui/material'
import { topRatedMovieCardsSx } from '../ComponentStyles/MovieStyles'
import topRatedMovies from '../Helpers/fetchTopRatedMovies'
import { Movie } from '../types/MoviesTypes'
import TopRatedMovie from './TopRatedMovie'

const TopRatedMovies = () => {
    return (
        <Box sx={topRatedMovieCardsSx}>
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
