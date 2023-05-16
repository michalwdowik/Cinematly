import { Box } from '@mui/material'
import { Movie } from '../MovieCard/types'
import { topRatedMovies } from '../Helpers/fetchMovies'
import TopRatedMovie from './TopRatedMovie'
import TopRatedMovieSkeleton from './TopRatedMovieSkeleton'
import useLoadingState from '../Hooks/useLoadingState'

const TopRatedMovies = () => {
    const [isLoaded, onLoad] = useLoadingState()
    return (
        <Box sx={topRatedMovieCardsStyles}>
            {topRatedMovies.map((movie: Movie, rankPosition: number) => (
                <>
                    <TopRatedMovie
                        key={movie.id}
                        onLoad={onLoad}
                        movie={movie}
                        rankPosition={rankPosition}
                        isLoaded={isLoaded}
                    />
                    {!isLoaded && <TopRatedMovieSkeleton key={movie.id} />}
                </>
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
