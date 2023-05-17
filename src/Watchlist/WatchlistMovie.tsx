import { Box, Skeleton } from '@mui/material'
import { MovieProps } from '../MovieCard/types'
import useLoadingState from '../Hooks/useLoadingState'
import shortenOverview from '../Helpers/cutText'
import {
    WatchlistMovieDetailsSkeleton,
    WatchlistMovieDetails,
} from './WatchlistMovieDetails'

const WatchlistMovie = ({ movie }: MovieProps) => {
    const [isLoaded, onLoad] = useLoadingState()

    return (
        <Box className="watchlistMovie">
            <Box className="watchlistMovieDetails">
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
        <span className="watchlistMovieOverview">
            {shortenOverview(movieOverview, 20)}
            ..
        </span>
    )
}

const WatchlistMovieOverviewSkeleton = ({
    movieOverview,
}: WatchlistMovieOverviewProps) => {
    return (
        <Skeleton variant="text" className="watchlistMovieOverview">
            <WatchlistMovieOverview movieOverview={movieOverview} />
        </Skeleton>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type WatchlistMovieOverviewProps = {
    movieOverview: string
}
