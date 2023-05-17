import { Box, Skeleton, Typography } from '@mui/material'
import { MovieProps } from '../MovieCard/types'
import useLoadingState from '../Hooks/useLoadingState'
import shortenOverview from '../Helpers/cutText'
import { watchlistMovieDetailsStyles } from './commonStyles'
import { WatchlistMovieDetails } from './WatchlistMovieDetails'
import WatchlistMovieDetailsSkeleton from './WatchlistMovieDetailsSkeleton'

const WatchlistMovie = ({ movie }: MovieProps) => {
    const [isLoaded, onLoad] = useLoadingState()

    return (
        <Box sx={watchlistMovieStyles}>
            <Box sx={watchlistMovieDetailsStyles}>
                {isLoaded ? (
                    <WatchlistMovieDetails
                        onLoad={onLoad}
                        movieTitle={movie.title}
                        movieBackdropPath={movie.backdrop_path}
                        movieReleaseDate={movie.release_date || movie.release}
                    />
                ) : (
                    <WatchlistMovieDetailsSkeleton
                        onLoad={onLoad}
                        movieTitle={movie.title}
                        movieBackdropPath={movie.backdrop_path}
                        movieReleaseDate={movie.release_date || movie.release}
                    />
                )}
            </Box>
            {isLoaded ? (
                <WatchlistMovieOverview movieOverview={movie.overview} />
            ) : (
                <WatchlistMovieOverviewSkeleton
                    movieOverview={movie.overview}
                />
            )}
        </Box>
    )
}

export default WatchlistMovie

const WatchlistMovieOverview = ({
    movieOverview,
}: WatchlistMovieOverviewProps) => {
    return (
        <Typography sx={watchlistMovieOverviewStyles}>
            {shortenOverview(movieOverview, 20)}
            ..
        </Typography>
    )
}

const WatchlistMovieOverviewSkeleton = ({
    movieOverview,
}: WatchlistMovieOverviewProps) => {
    return (
        <Skeleton variant="text" sx={watchlistMovieOverviewStyles}>
            <WatchlistMovieOverview movieOverview={movieOverview} />
        </Skeleton>
    )
}

/* --------------------------------- STYLES --------------------------------- */
const watchlistMovieStyles = {
    display: 'flex',
    flexGrow: '1',
    gap: '0.5rem',
    alignItems: 'center',
}

const watchlistMovieOverviewStyles = {
    alignSelf: 'start',
    justifyContent: 'start',
    overflow: 'scroll',
    color: 'black',
    fontSize: '0.75rem',
    transition: '0.2s ease-in-out all',
    ':hover': {
        opacity: '40%',
    },
}
/* --------------------------------- TYPES --------------------------------- */
type WatchlistMovieOverviewProps = {
    movieOverview: string
}
