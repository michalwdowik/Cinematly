import { Box, Skeleton } from '@mui/material'
import { Movie } from '../MovieCard/types'
import { topRatedMovies } from '../Helpers/fetchMovies'
import TopRatedMovie from './TopRatedMovie'
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

const TopRatedMovieSkeleton = () => {
    return (
        <Box className="topRatedMovie">
            <Skeleton
                sx={{
                    bgcolor: 'grey.900',
                    borderRadius: '2rem',
                    margin: 'auto',
                }}
                width={400}
                height={400}
                variant="rectangular"
            />
        </Box>
    )
}

/* --------------------------------- STYLES --------------------------------- */
const topRatedMovieCardsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    alignContent: 'center',
}
