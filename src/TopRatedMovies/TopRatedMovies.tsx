import { Box } from '@mui/material'
import { Movie } from '../MovieCard/types'
import { topRatedMovies } from '../Helpers/fetchMovies'
import TopRatedMovie from './TopRatedMovie'
import useLoadingState from '../Hooks/useLoadingState'
import TopRatedMovieSkeleton from './TopRatedMoviesSkeleton'

const TopRatedMovies = () => {
    const [isLoaded, onLoad] = useLoadingState()
    return (
        <Box className="topRatedMovieCards">
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
